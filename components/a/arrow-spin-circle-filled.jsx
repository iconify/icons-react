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

.qpkdd6p1q {
  d: path("M21.903 15.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z");
}

.wke-l1dtb {
  d: path("M16.539 15.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z");
}

.ynztxrbvu {
  d: path("M16.937 7.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 18 13a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGasiOkeDv"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="ynztxrbvu"/><path class="wke-l1dtb"/><path class="qpkdd6p1q"/></g></mask></defs><circle mask="url(#SVGasiOkeDv)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:arrow-spin-circle-filled",
	});
}

export default Component;
