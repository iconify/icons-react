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

.nuubw4bkq {
  d: path("m7.64 9.732l6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536");
}

.usrah-haq {
  d: path("m19.64 11.268l-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGGx3CsedI"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="usrah-haq"/><path class="nuubw4bkq"/></g></mask></defs><circle mask="url(#SVGGx3CsedI)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:angle-down-circle-filled",
	});
}

export default Component;
