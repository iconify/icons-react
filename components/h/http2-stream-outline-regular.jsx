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
		"content": `<style>.jxfqwcbwg {
  d: path("M5 14.5h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.unjh48car {
  d: path("M2 12a5 5 0 0 1 5 -5h10a5 5 0 0 1 5 5 5 5 0 0 1 -5 5H7a5 5 0 0 1 -5 -5");
}

.z8g2jgblp {
  d: path("M5 12h14");
}

.zdx90xb1o {
  d: path("M5 9.5h14");
}
</style><g class="nrj6p8qat"><path class="unjh48car"/><path class="zdx90xb1o"/><path class="z8g2jgblp"/><path class="jxfqwcbwg"/></g>`,
		"fallback": "iconmind:http2-stream-outline-regular",
	});
}

export default Component;
