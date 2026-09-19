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
		"content": `<style>.aiq-qobzw {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("M43.1 2c3.2 4.8 5.1 10.6 5.1 16.8C48.3 35.5 34.6 49 17.7 49C12 49 6.6 47.4 2 44.7C7.2 55 17.9 62 30.3 62C47.8 62 62 48 62 30.7C62 17.9 54.2 6.9 43.1 2");
}
</style><path class="aiq-qobzw"/>`,
		"fallback": "emojione:crescent-moon",
	});
}

export default Component;
