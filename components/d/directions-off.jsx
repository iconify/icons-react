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
		"content": `<style>.wafpblb7t {
  fill: currentColor;
  d: path("M20.475 23.3L16 18.8l-2.6 2.6q-.3.3-.663.45T12 22t-.737-.15t-.663-.45l-8-8q-.3-.3-.45-.663T2 12t.15-.737t.45-.663l4.025-4.025L12.25 12.2V15L.675 3.5L2.1 2.075l19.8 19.8zM8 15h2v-3h2.025l-2-2H9q-.425 0-.712.288T8 11zm10.85.95l-3.4-3.4L17 11l-3.5-3.5V10h-.6L8.05 5.15L10.6 2.6q.3-.3.663-.45T12 2t.738.15t.662.45l8 8q.3.3.45.663T22 12t-.15.738t-.45.662z");
}
</style><path class="wafpblb7t"/>`,
		"fallback": "material-symbols:directions-off",
	});
}

export default Component;
