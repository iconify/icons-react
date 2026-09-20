import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jdhqqcb4f {
  fill: currentColor;
  d: path("m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5m-127.15 61L38 195.9v-88.25Zm12.27 6h31.1l62.29 44H50.16Zm43.37-6L218 107.65v88.25ZM128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83Z");
}
</style><path class="jdhqqcb4f"/>`,
		"fallback": "ph:envelope-open-light",
	});
}

export default Component;
