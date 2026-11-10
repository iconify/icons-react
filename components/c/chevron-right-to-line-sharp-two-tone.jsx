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

.gja5vftud {
  fill-rule: evenodd;
  d: path("M18 20H16V4H18V20Z");
}

.w2lm4lbns {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13.707 11.29C14.097 11.68 14.098 12.32 13.707 12.71L7.414 19L6 17.59L11.586 12L6 6.41L7.414 5L13.707 11.29Z");
}
</style><g class="cuyn6tgcc"><path class="w2lm4lbns"/><path clip-rule="evenodd" class="gja5vftud"/></g>`,
		"fallback": "keyline-icons:chevron-right-to-line-sharp-two-tone",
	});
}

export default Component;
