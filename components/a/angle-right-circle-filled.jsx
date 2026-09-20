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

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.lw38hlb5q {
  d: path("M9.732 7.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z");
}

.nv3b7hbiq {
  d: path("M14.732 12.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGyVhRRpKW"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="nv3b7hbiq"/><path class="lw38hlb5q"/></g></mask></defs><circle mask="url(#SVGyVhRRpKW)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:angle-right-circle-filled",
	});
}

export default Component;
