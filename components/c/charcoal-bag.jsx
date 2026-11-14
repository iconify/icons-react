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
		"content": `<style>.gnunfyz7d {
  d: path("m5.5 6l-1 15h15l-1-15Zm0 0l.75-3h11.5l.75 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oz6zj90jo {
  d: path("M12 9c2.5 2 3.5 4 3.5 5.5a3.5 3.5 0 0 1-7 0c0-2 2-3.5 3.5-5.5");
}
</style><g class="hntgybcog"><path class="gnunfyz7d"/><path class="oz6zj90jo"/></g>`,
		"fallback": "uix:charcoal-bag",
	});
}

export default Component;
