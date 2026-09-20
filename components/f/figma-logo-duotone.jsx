import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jgo_q_zqk {
  d: path("M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M72 64a24 24 0 0 1 24-24h32v48H96a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}

.m5rk6bbod {
  d: path("M200 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32M96 96h40V32H96a32 32 0 0 0 0 64M64 196a36 36 0 0 0 72 0v-36h-36a36 36 0 0 0-36 36");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="m5rk6bbod"/><path class="jgo_q_zqk"/></g>`,
		"fallback": "ph:figma-logo-duotone",
	});
}

export default Component;
