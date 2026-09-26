import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cy44qgphq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 23L19 23C21.2091 23 23 21.2091 23 19C23 17.1481 21.7288 15.5383 19.9273 15.109C19.491 12.4509 17.1937 10.5 14.5 10.5C11.8063 10.5 9.509 12.4509 9.0727 15.109C7.2712 15.5383 6 17.1481 6 19C6 21.2091 7.7909 23 10 23Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q-elplbnj {
  d: path("M5.9258 14.5517L5.0758 14.0249C3.1634 12.8397 2 10.7498 2 8.5C2 4.9101 4.9101 2 8.5 2C7.844 2.82 7.4866 3.8388 7.4866 4.8889C7.4866 6.5491 8.3766 8.0819 9.8184 8.905L10.6868 9.4008");
}
</style><g class="gp_8x1bzb"><path class="cy44qgphq"/><path class="q-elplbnj"/></g>`,
		"fallback": "keyline-icons:cloud-moon-sharp-duotone",
	});
}

export default Component;
