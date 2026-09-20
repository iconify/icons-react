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
		"content": `<style>.bqo9tm7yv {
  d: path("M13 4a8 8 0 1 0 0 16 6.5 6.5 0 0 1 0 -16");
}

.f4j-wu4yp {
  fill: currentColor;
  d: path("m19 12.5 2.5 2.5 -2.5 2.5 -2.5 -2.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hb0bhyban {
  fill: currentColor;
  d: path("M13 4a8 8 0 1 0 0 16 6.5 6.5 0 0 1 0 -16");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j53yk1bmk {
  d: path("M19 4.5 21.5 7 19 9.5 16.5 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tl7fjb60a {
  d: path("m19 12.5 2.5 2.5 -2.5 2.5 -2.5 -2.5Z");
}

.zerrtzqzw {
  fill: currentColor;
  d: path("M19 4.5 21.5 7 19 9.5 16.5 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="hb0bhyban"/><path class="zerrtzqzw"/><path class="f4j-wu4yp"/><path class="bqo9tm7yv"/><path class="j53yk1bmk"/><path class="tl7fjb60a"/></g>`,
		"fallback": "iconmind:clear-night-duotone-regular",
	});
}

export default Component;
