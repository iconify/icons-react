import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a1gd2d18g {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30");
}

.lwfrorbrl {
  fill: var(--svg-color--f9f9f9, #f9f9f9);
  d: path("M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30");
}
</style><path class="lwfrorbrl"/><path class="a1gd2d18g"/>`,
		"fallback": "emojione:flag-for-indonesia",
	});
}

export default Component;
