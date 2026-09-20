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

.ehbqml5ic {
  cx: 10px;
  cy: 10px;
  r: 2px;
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

.z4qfeoj9o {
  cx: 15px;
  cy: 10px;
  r: 2px;
}

.zm0the13b {
  cx: 5px;
  cy: 10px;
  r: 2px;
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGask04d0u"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><circle class="zm0the13b"/><circle class="ehbqml5ic"/><circle class="z4qfeoj9o"/></g></mask></defs><circle mask="url(#SVGask04d0u)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:dots-x-circle-filled",
	});
}

export default Component;
