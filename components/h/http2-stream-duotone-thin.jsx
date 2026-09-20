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

.jxfqwcbwg {
  d: path("M5 14.5h14");
}

.unjh48car {
  d: path("M2 12a5 5 0 0 1 5 -5h10a5 5 0 0 1 5 5 5 5 0 0 1 -5 5H7a5 5 0 0 1 -5 -5");
}

.xc-pw4ble {
  fill: currentColor;
  d: path("M2 12a5 5 0 0 1 5 -5h10a5 5 0 0 1 5 5 5 5 0 0 1 -5 5H7a5 5 0 0 1 -5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z8g2jgblp {
  d: path("M5 12h14");
}

.zdx90xb1o {
  d: path("M5 9.5h14");
}
</style><g class="hntgybcog"><path class="xc-pw4ble"/><path class="unjh48car"/><path class="zdx90xb1o"/><path class="z8g2jgblp"/><path class="jxfqwcbwg"/></g>`,
		"fallback": "iconmind:http2-stream-duotone-thin",
	});
}

export default Component;
