import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ilp60qbxz {
  d: path("M13.798 22.776s2.72-7.481 10.202-7.481s10.202 7.481 10.202 7.481C44.404 41.82 24 42.5 24 42.5s-20.404-.68-10.202-19.724");
}

.whuytjk-u {
  d: path("M29.754 16.825s2.976-4.93 1.615-5.61s-3.4.68-3.4.68s1.36-4.762-1.36-4.762s-3.401 2.72-3.401 2.72s-.991-5.641-4.761-4.08c-2.356.976-3.229 4.26.172 11.061m-2.1 8.663a1.36 1.36 0 0 1 2.72 0m9.521 0a1.36 1.36 0 0 1 2.721 0m-7.467 2.72s12.242-.68 0 12.243c0 0-12.243-12.243 0-12.243");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="whuytjk-u"/><path class="ilp60qbxz"/></g>`,
		"fallback": "arcticons:emoji-chicken",
	});
}

export default Component;
