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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5j5rs7hj {
  d: path("M12 2.5C9.5 5 8 8 7.75 11M12 2.5C14.5 5 16 8 16.25 11M18 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.sbgi_9rnf {
  d: path("M19.5 17v2.5a2.25 2.25 0 0 1-4.5 0v-2");
}

.x6vqwutyw {
  d: path("M2.5 11a9.5 8.5 0 0 1 19 0Zm9.5 0v10.5");
}
</style><g class="hntgybcog"><path class="x6vqwutyw"/><path class="j5j5rs7hj"/><path class="sbgi_9rnf"/></g>`,
		"fallback": "uix:fishing-umbrella",
	});
}

export default Component;
