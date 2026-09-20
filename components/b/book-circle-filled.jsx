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
		"content": `<style>.aicr0gbzr {
  d: path("M23 8a2 2 0 0 0-2.323-1.974L12.838 7.31a1 1 0 0 0-.838.987V20a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 23 17.737zm-2 9.737l-7 1.094V9.147L21 8z");
}

.bd9gczbnq {
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

.lvxpwvmmq {
  d: path("M14 8.297a1 1 0 0 0-.838-.987L5.323 6.026A2 2 0 0 0 3 8v9.737a2 2 0 0 0 1.69 1.976l8.155 1.275A1 1 0 0 0 14 20zm-9 9.44V8l7 1.147v9.684z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGTKJrxduF"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="lvxpwvmmq"/><path class="aicr0gbzr"/></g></mask></defs><circle mask="url(#SVGTKJrxduF)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:book-circle-filled",
	});
}

export default Component;
