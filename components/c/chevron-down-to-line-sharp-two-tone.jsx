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

.lebutxb4q {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 7.41L12.707 13.71C12.317 14.1 11.683 14.1 11.293 13.71L5 7.41L6.414 6L12 11.59L17.586 6L19 7.41Z");
}

.uly83hb2i {
  fill-rule: evenodd;
  d: path("M20 18H4V16H20V18Z");
}
</style><g class="cuyn6tgcc"><path class="lebutxb4q"/><path clip-rule="evenodd" class="uly83hb2i"/></g>`,
		"fallback": "keyline-icons:chevron-down-to-line-sharp-two-tone",
	});
}

export default Component;
