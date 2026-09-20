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

.hksrydaxc {
  d: path("M15 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}

.it5wk5bgi {
  fill-rule: evenodd;
  d: path("M13 10a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0v-7a2 2 0 0 1 2-2");
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGY2jWGvjJ"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="it5wk5bgi"/><path class="hksrydaxc"/></g></mask></defs><circle mask="url(#SVGY2jWGvjJ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:info-circle-filled",
	});
}

export default Component;
