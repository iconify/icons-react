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

.exhkn95oo {
  d: path("M15.646 17.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087");
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

.n-sjswkmr {
  d: path("M10.172 15.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0");
}

.y4mkpibdo {
  d: path("M8.903 10.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGy2KxgeCh"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="exhkn95oo"/><path class="y4mkpibdo"/><path class="n-sjswkmr"/></g></mask></defs><circle mask="url(#SVGy2KxgeCh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:arrow-down-left-circle-filled",
	});
}

export default Component;
