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
		"content": `<style>.hywwh1blx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1V18.246M19.294 10.824L12 18.246L4.706 10.824M20 22H4");
}
</style><path class="hywwh1blx"/>`,
		"fallback": "keyline-icons:arrow-down-to-line-sharp",
	});
}

export default Component;
