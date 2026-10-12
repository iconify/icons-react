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
		"content": `<style>.ihpazlbpq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.36 2.98l.95 1.23q.36.48.89.21l1.39-.71q.53-.27.65.32l.32 1.52q.12.59.72.57l1.55-.03q.6-.01.45.57l-.38 1.5q-.14.59.4.83l1.42.65q.54.25.16.71l-1 1.19q-.38.46 0 .92l1 1.19q.38.46-.16.71l-1.42.65q-.54.24-.4.83l.38 1.5q.15.58-.45.57l-1.55-.03q-.6-.02-.72.57l-.32 1.52q-.12.59-.65.32l-1.39-.71q-.53-.27-.89.21l-.95 1.23q-.36.48-.72 0l-.95-1.23q-.36-.48-.89-.21l-1.39.71q-.53.27-.65-.32l-.32-1.52q-.12-.59-.72-.57l-1.55.03q-.6.01-.45-.57l.38-1.5q.14-.59-.4-.83l-1.42-.65q-.54-.25-.16-.71l1-1.19q.38-.46 0-.92l-1-1.19q-.38-.46.16-.71l1.42-.65q.54-.24.4-.83l-.38-1.5q-.15-.58.45-.57l1.55.03q.6.02.72-.57l.32-1.52q.12-.59.65-.32l1.39.71q.53.27.89-.21l.95-1.23q.36-.48.72 0");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ihpazlbpq"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:burst-shape",
	});
}

export default Component;
