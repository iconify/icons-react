import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bc-xpglgq {
  fill: var(--svg-color--000, #000);
  d: path("M22.5 13a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0");
}

.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGpbtFLRHk"><path class="k5-vjlrin"/><path class="bc-xpglgq"/></mask></defs><circle mask="url(#SVGpbtFLRHk)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:circle-big-filled-circle-filled",
	});
}

export default Component;
