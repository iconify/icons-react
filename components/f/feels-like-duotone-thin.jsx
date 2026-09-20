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
		"content": `<style>.b-g91f0jy {
  d: path("M16 14a3 3 0 0 1 6 0");
}

.bw1nw8b2t {
  d: path("M10 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8lijfbga {
  fill: currentColor;
  d: path("M10 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l517yxbln {
  d: path("M12 9v6");
}

.rwa7yr8zy {
  fill: currentColor;
  d: path("M9.5 15V6a2.5 2.5 0 0 1 5 0v9a4.5 4.5 0 1 1 -5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s4l_k6b-t {
  d: path("M3 20h4");
}

.vtt-aac3x {
  fill: currentColor;
  d: path("M17 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wmtj7ubjb {
  d: path("M9.5 15V6a2.5 2.5 0 0 1 5 0v9a4.5 4.5 0 1 1 -5 0");
}

.yhgzmt2de {
  d: path("M17 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="rwa7yr8zy"/><path class="j8lijfbga"/><path class="vtt-aac3x"/><path class="wmtj7ubjb"/><path class="bw1nw8b2t"/><path class="l517yxbln"/><path class="yhgzmt2de"/><path class="b-g91f0jy"/><path class="s4l_k6b-t"/></g>`,
		"fallback": "iconmind:feels-like-duotone-thin",
	});
}

export default Component;
