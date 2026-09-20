import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o31cklbqy {
  fill: var(--svg-color--fff, #fff);
  d: path("M27 11v16H11z");
}

.uwgvikzho {
  fill: var(--svg-color--fff, #fff);
  d: path("M7 12.657L12.658 7l13.814 13.814l-5.656 5.657z");
}

.w4bji_bjc {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z");
}
</style><path class="w4bji_bjc"/><path class="o31cklbqy"/><path class="uwgvikzho"/>`,
		"fallback": "twemoji:down-right-arrow",
	});
}

export default Component;
