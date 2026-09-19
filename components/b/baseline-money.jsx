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
		"content": `<style>.nbywah_li {
  fill: currentColor;
  d: path("M2 4v16h20V4zm2 14V6h16v12z");
}

.wj5xh-b7b {
  fill: currentColor;
  d: path("M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1z");
}
</style><path class="wj5xh-b7b"/><path class="nbywah_li"/>`,
		"fallback": "ic:baseline-money",
	});
}

export default Component;
