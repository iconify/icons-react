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

.e9v3o5ldb {
  d: path("M13 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1");
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

.tt41a4bld {
  d: path("M13 7a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0");
}

.z30j-amer {
  d: path("M17 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGOBd66ctm"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="tt41a4bld"/><path class="e9v3o5ldb"/><path class="z30j-amer"/></g></mask></defs><circle mask="url(#SVGOBd66ctm)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:clock-circle-filled",
	});
}

export default Component;
