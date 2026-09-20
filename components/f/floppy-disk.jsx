import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f58jgqbxf {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M4 36s-4 0-4-4V4s0-4 4-4h26c1 0 2 1 2 1l3 3s1 1 1 2v26s0 4-4 4z");
}

.h982-tb-u {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M5 19v-1s0-2 2-2h21c2 0 2 2 2 2v1z");
}

.kif6qj_ap {
  fill: var(--svg-color--e1e8ed, #e1e8ed);
  d: path("M5 32.021V19h25v13s0 2-2 2H7c-2 0-2-1.979-2-1.979M10 3s0-1 1-1h18c1.048 0 1 1 1 1v10s0 1-1 1H11s-1 0-1-1zm12 10h5V3h-5z");
}
</style><path class="f58jgqbxf"/><path class="h982-tb-u"/><path class="kif6qj_ap"/>`,
		"fallback": "twemoji:floppy-disk",
	});
}

export default Component;
