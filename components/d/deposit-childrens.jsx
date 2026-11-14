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
		"content": `<style>.jmz0z3evc {
  d: path("M11.945 18c-.72 0-1.213-.006-1.945-.25v1.75H7.5V17C5.25 16 4 14.25 4 12c0-3.5 3.5-6 8-6c4.461 0 7.939 2.457 7.999 5.909");
}

.mtyzu8y-f {
  d: path("m16.5 19.75l1.5-3.5l1.5 3.5");
}

.nyfgqbqtt {
  d: path("M4.5 10.5h-2v3h2m3.25-2.75h.01M10.5 8.5h3m1.25 6.25h6.5v6.5h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jmz0z3evc"/><path class="nyfgqbqtt"/><path class="mtyzu8y-f"/></g>`,
		"fallback": "uix-sharp:deposit-childrens",
	});
}

export default Component;
