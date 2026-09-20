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
		"content": `<style>.bd9gczbnq {
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

.yivfaibfj {
  fill: var(--svg-color--000, #000);
  d: path("m13 16.467l-3.755 4.2C8.634 21.35 7.5 20.918 7.5 20V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGnqDomdcR"><path class="k5-vjlrin"/><path class="yivfaibfj"/></mask></defs><circle mask="url(#SVGnqDomdcR)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:bookmark-filled-circle-filled",
	});
}

export default Component;
