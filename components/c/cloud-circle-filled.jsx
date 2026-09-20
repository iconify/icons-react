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

.z8a3rjbtg {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-3.324 5l.387-1.501A2 2 0 0 1 13 8h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 17 15H9a2 2 0 1 1 0-4z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGDVeLmb8g"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="z8a3rjbtg"/></mask></defs><circle mask="url(#SVGDVeLmb8g)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:cloud-circle-filled",
	});
}

export default Component;
