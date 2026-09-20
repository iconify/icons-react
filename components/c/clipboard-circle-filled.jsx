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

.pxcz5tksh {
  fill-rule: evenodd;
  d: path("M8.675 5.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H9.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V6.5z");
}

.saaoodbrh {
  d: path("M8 8v11h10V8h-1V6h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v2z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGtv8dub5e"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="pxcz5tksh"/><path class="saaoodbrh"/></g></mask></defs><circle mask="url(#SVGtv8dub5e)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:clipboard-circle-filled",
	});
}

export default Component;
