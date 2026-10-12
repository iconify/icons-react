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
		"content": `<style>.d02scy2nh {
  d: path("M10.5 9.75v-5.5a1.5 1.5 0 0 1 3 0v5.5Zm0-3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb8_egb3s {
  width: 6.5px;
  height: 7.5px;
  x: 8.75px;
  y: 9.75px;
  rx: 1.5px;
}

.y942ybcdk {
  d: path("M12 17.25v4");
}
</style><g class="hntgybcog"><path class="d02scy2nh"/><rect class="xb8_egb3s"/><path class="y942ybcdk"/></g>`,
		"fallback": "iconoven:audio-jack",
	});
}

export default Component;
