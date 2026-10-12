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
		"content": `<style>.mc2kbzk_a {
  cx: 9px;
  cy: 9.5px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.px0dp75uh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 19h.01");
}

.w8wsxcjwx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 12h3.5m7.39 1.42l2.72 6.41q.39.92-.61.92h-5q-1 0-.61-.92l2.72-6.41q.39-.92.78 0m-.39 2.83v1.25");
}

.woivh0ber {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8.5h.01m3.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="mc2kbzk_a"/><path class="woivh0ber"/><path class="w8wsxcjwx"/><path class="px0dp75uh"/></g>`,
		"fallback": "iconoven:deepfake-alert",
	});
}

export default Component;
