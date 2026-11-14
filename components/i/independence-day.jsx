import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ed4d5aclx {
  d: path("m12 6.25l.823 1.867l2.03.206l-1.522 1.36l.432 1.994L12 10.65l-1.763 1.027l.432-1.994l-1.522-1.36l2.03-.206Z");
}

.tpz9-jbcg {
  d: path("M4.5 2.5v19m0-18c3.5-1.5 6 1.5 9 .25c2.5-1 4.5-.75 6-.25v11c-1.5-.5-3.5-.75-6 .25c-3 1.25-5.5-1.75-9-.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tpz9-jbcg"/><path class="ed4d5aclx"/></g>`,
		"fallback": "uix-sharp:independence-day",
	});
}

export default Component;
