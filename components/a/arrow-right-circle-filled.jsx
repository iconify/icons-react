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

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.o9zwovhzi {
  d: path("M14.026 17.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128");
}

.upsxrvbtk {
  d: path("M14.026 8.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408");
}

.uq4c1ccfc {
  d: path("M17 13a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGSzTpfdYB"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="upsxrvbtk"/><path class="o9zwovhzi"/><path class="uq4c1ccfc"/></g></mask></defs><circle mask="url(#SVGSzTpfdYB)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:arrow-right-circle-filled",
	});
}

export default Component;
