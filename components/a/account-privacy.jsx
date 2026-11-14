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
		"content": `<style>.qzun5gbel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.824 0 1.611.085 2.344.245M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM15 17h6v4.5h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}
</style><path class="qzun5gbel"/>`,
		"fallback": "uix-sharp:account-privacy",
	});
}

export default Component;
