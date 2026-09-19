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
		"content": `<style>.d_f4rhbyg {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m28 30c0 2.375-.3 4.681-.858 6.884H31.017v21.091a27.8 27.8 0 0 1-13.767-4.189V38.884H4.858a28 28 0 0 1 0-13.767H17.25V8.215a27.8 27.8 0 0 1 13.767-4.189v21.092h28.125C59.7 27.32 60 29.626 60 32");
}
</style><path class="d_f4rhbyg"/>`,
		"fallback": "emojione-monotone:flag-for-flag-sweden",
	});
}

export default Component;
