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
		"content": `<style>.c8uh2gw9u {
  d: path("M9 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.cacmi2bmi {
  d: path("M13 3H9L6 6v15h12V8");
}

.ffipo4b5s {
  d: path("M9 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.krno6ds-i {
  d: path("M13 15h3");
}

.mut__fbgb {
  d: path("M13 11h3");
}
</style><g class="hntgybcog"><path class="cacmi2bmi"/><path class="ffipo4b5s"/><path class="mut__fbgb"/><path class="c8uh2gw9u"/><path class="krno6ds-i"/></g>`,
		"fallback": "iconmind:container-file-outline-thin",
	});
}

export default Component;
