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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hqd2zab-n {
  d: path("M5 9.25a5 5 0 0 1 0 5.5M8.5 7a8 8 0 0 1 0 10M12 4.75a11 11 0 0 1 0 14.5");
}

.z_ldbs8uo {
  d: path("M15.5 2.75a13.5 13.5 0 0 1 0 18.5");
}
</style><g class="hntgybcog"><path class="hqd2zab-n"/><path class="z_ldbs8uo"/></g>`,
		"fallback": "iconoven:contactless",
	});
}

export default Component;
