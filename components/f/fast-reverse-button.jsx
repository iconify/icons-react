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
		"content": `<style>.rvohuybli {
  fill: currentColor;
  d: path("M53.212 10.787c-11.715-11.715-30.711-11.715-42.426 0c-11.715 11.717-11.715 30.712 0 42.427s30.711 11.715 42.426 0c11.717-11.715 11.717-30.71 0-42.427m-8.213 39.212L32.276 38.122v11.877L12.999 32.001L32.276 14v11.879L44.999 14z");
}
</style><path class="rvohuybli"/>`,
		"fallback": "emojione-monotone:fast-reverse-button",
	});
}

export default Component;
