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

.slgbpticm {
  fill: var(--svg-color--000, #000);
  d: path("M5.5 11a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGmhRzfUna"><path class="k5-vjlrin"/><path class="slgbpticm"/></mask></defs><circle mask="url(#SVGmhRzfUna)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:grab-handle-circle-filled",
	});
}

export default Component;
