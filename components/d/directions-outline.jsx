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
		"content": `<style>.qgquiubrj {
  fill: currentColor;
  d: path("M8 15h2v-3h3.5v2.5L17 11l-3.5-3.5V10H9q-.425 0-.712.288T8 11zm4 7q-.375 0-.737-.15t-.663-.45l-8-8q-.3-.3-.45-.663T2 12t.15-.737t.45-.663l8-8q.3-.3.663-.45T12 2t.738.15t.662.45l8 8q.3.3.45.663T22 12t-.15.738t-.45.662l-8 8q-.3.3-.663.45T12 22m-4-6l4 4l8-8l-8-8l-8 8zm4-4");
}
</style><path class="qgquiubrj"/>`,
		"fallback": "material-symbols:directions-outline",
	});
}

export default Component;
