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
		"content": `<style>.bxk4e0_te {
  fill: currentColor;
  d: path("m12.661 10.84l.313.633a1.5 1.5 0 0 0 1.129.82l.698.102a.737.737 0 0 1 .409 1.257l-.505.493a1.5 1.5 0 0 0-.432 1.328l.119.695a.737.737 0 0 1-1.069.777l-.625-.328a1.5 1.5 0 0 0-1.396 0l-.625.328a.737.737 0 0 1-1.069-.777l.119-.695a1.5 1.5 0 0 0-.432-1.328l-.505-.493a.737.737 0 0 1 .409-1.257l.698-.102a1.5 1.5 0 0 0 1.129-.82l.313-.633a.737.737 0 0 1 1.322 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.yms1g_6ir {
  d: path("M10.75 3h2.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 8.5 5.25A2.25 2.25 0 0 1 10.75 3");
}
</style><g class="hntgybcog"><path class="re3nbbcdl"/><path class="yms1g_6ir"/><path class="bxk4e0_te"/></g>`,
		"fallback": "uix:game-achievements-list",
	});
}

export default Component;
