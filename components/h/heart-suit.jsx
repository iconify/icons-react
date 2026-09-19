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
		"content": `<style>.nzjivrbpj {
  fill: currentColor;
  d: path("M46.063 2c-6.268 0-11.515 3.598-14.062 8.81C29.452 5.598 24.206 2 17.938 2C9.227 2 2 9.361 2 17.938C2 32.406 32.001 62 32.001 62S62 32.406 62 17.938C62 9.361 54.775 2 46.063 2");
}
</style><path class="nzjivrbpj"/>`,
		"fallback": "emojione-monotone:heart-suit",
	});
}

export default Component;
