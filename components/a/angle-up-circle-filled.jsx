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

.m9i11s9ez {
  d: path("m6.36 14.732l6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536");
}

.ym3qiobuf {
  d: path("m18.36 16.268l-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGZw9zTozP"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="ym3qiobuf"/><path class="m9i11s9ez"/></g></mask></defs><circle mask="url(#SVGZw9zTozP)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:angle-up-circle-filled",
	});
}

export default Component;
