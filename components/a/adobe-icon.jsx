import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":227};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cyogo5blg {
  fill: var(--svg-color--fa0f00, #fa0f00);
  d: path("m128.024 83.527l60.288 143.042h-39.513l-18.038-45.554H86.642zM256 0v226.54L161.353 0zM94.684 0L0 226.54V0z");
}
</style><path class="cyogo5blg"/>`,
		"fallback": "logos:adobe-icon",
	});
}

export default Component;
