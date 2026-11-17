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
		"content": `<style>.bf0vkbb_l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3S5 8 5 14a7 7 0 0 0 14 0c0-6-7-11-7-11m0 8v6m-2.598-4.5l5.196 3m-5.196 0l5.196-3");
}

.ft5dv1b6b {
  fill: none;
}

.zn12e4o2k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3s7 5 7 11a7 7 0 1 1-14 0c0-6 7-11 7-11");
}
</style><g class="ft5dv1b6b"><path class="zn12e4o2k"/><path class="bf0vkbb_l"/></g>`,
		"fallback": "coolicons:droplet-snowflake-duotone",
	});
}

export default Component;
