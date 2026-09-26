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
		"content": `<style>.adf3ldjbj {
  d: path("M12.6508 11.7007L16.5 15L12.6508 18.2993M22 19L17 19");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t2qxz6-kf {
  stroke-opacity: 0.4;
  d: path("M22 16L22 15C22 12.7909 20.2091 11 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C3.7909 11 2 12.7909 2 15C2 17.2091 3.7909 19 6 19L10 19");
}
</style><g class="gp_8x1bzb"><path class="t2qxz6-kf"/><path class="adf3ldjbj"/></g>`,
		"fallback": "keyline-icons:cloud-terminal-sharp-duotone",
	});
}

export default Component;
