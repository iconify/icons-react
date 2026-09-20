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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.bslg5pcgg {
  d: path("M3 6v12h18V6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8y9e5sub {
  fill: currentColor;
  d: path("M14 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mkaclw6aw {
  d: path("M14 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nizbrguot {
  fill: currentColor;
  d: path("M6 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.of_dlbc-j {
  d: path("M6 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.p28r88boo {
  fill: currentColor;
  d: path("M3 6v12h18V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="p28r88boo"/><path class="nizbrguot"/><path class="k8y9e5sub"/><path class="bslg5pcgg"/><path class="ae-e09b3w"/><path class="of_dlbc-j"/><path class="mkaclw6aw"/></g>`,
		"fallback": "iconmind:board-game-duotone-thin",
	});
}

export default Component;
