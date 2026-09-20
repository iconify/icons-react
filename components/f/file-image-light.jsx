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
		"content": `<style>.ej42m87xw {
  fill: currentColor;
  d: path("M109 148.67a6 6 0 0 0-10 0L76.46 182.5l-11.41-17.74a6 6 0 0 0-10.1 0l-36 56A6 6 0 0 0 24 230h128a6 6 0 0 0 5-9.33ZM35 218l25-38.9l11.32 17.6a6 6 0 0 0 10 .08l22.64-34L140.79 218ZM212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z");
}
</style><path class="ej42m87xw"/>`,
		"fallback": "ph:file-image-light",
	});
}

export default Component;
