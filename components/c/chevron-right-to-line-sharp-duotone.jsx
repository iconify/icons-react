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

.jons1ob5m {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 4V20H16V4H18ZM13.707 11.29C14.098 11.68 14.097 12.32 13.707 12.71L7.414 19L6 17.59L11.586 12L6 6.41L7.414 5L13.707 11.29Z");
}

.q7xwc7hma {
  d: path("M13.707 11.29C14.098 11.68 14.097 12.32 13.707 12.71L7.414 19L6 17.59L11.586 12L6 6.41L7.414 5L13.707 11.29Z");
}
</style><g class="cuyn6tgcc"><path class="jons1ob5m"/><path class="q7xwc7hma"/></g>`,
		"fallback": "keyline-icons:chevron-right-to-line-sharp-duotone",
	});
}

export default Component;
