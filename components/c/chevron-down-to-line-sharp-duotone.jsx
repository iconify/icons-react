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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ofkls1b1f {
  d: path("M19 7.41L12.707 13.71C12.317 14.1 11.683 14.1 11.293 13.71L5 7.41L6.414 6L12 11.59L17.586 6L19 7.41Z");
}

.xu5wa-b6l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 16V18H4V16H20ZM19 7.41L12.707 13.71C12.317 14.1 11.683 14.1 11.293 13.71L5 7.41L6.414 6L12 11.59L17.586 6L19 7.41Z");
}
</style><g class="cuyn6tgcc"><path class="xu5wa-b6l"/><path class="ofkls1b1f"/></g>`,
		"fallback": "keyline-icons:chevron-down-to-line-sharp-duotone",
	});
}

export default Component;
