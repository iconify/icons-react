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
		"content": `<style>.k8nm_cciv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5za1.316 1.316 0 0 0 1.961 1.147l.039-.022a1.291 1.291 0 0 0 0-2.25l-.039-.022A1.316 1.316 0 0 0 2.5 5M10 5h11M2.5 12za1.316 1.316 0 0 0 1.961 1.147l.039-.022a1.291 1.291 0 0 0 0-2.25l-.039-.022A1.316 1.316 0 0 0 2.5 12m7.5 0h11M2.5 19za1.316 1.316 0 0 0 1.961 1.147l.039-.022a1.291 1.291 0 0 0 0-2.25l-.039-.022A1.316 1.316 0 0 0 2.5 19m7.5 0h11");
}
</style><path class="k8nm_cciv"/>`,
		"fallback": "uix:episode-list",
	});
}

export default Component;
