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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix8cskbcl {
  d: path("M6.5 14H14.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.s5dde6qgk {
  d: path("M21.5 8H13.5M13.5 8H7M13.5 8L17 2.5M7 8H2.5M7 8L10.5 2.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xvjk-cbox {
  d: path("M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z");
}

.z4e6-1p3b {
  d: path("M6.5 17.5H12");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="s5dde6qgk"/><path class="ix8cskbcl"/><path class="z4e6-1p3b"/></g>`,
		"fallback": "solar:clapperboard-text-line-duotone",
	});
}

export default Component;
