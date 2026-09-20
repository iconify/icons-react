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
		"content": `<style>.racsvxx3t {
  d: path("M12 18h3l3 -3 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v-jogvb5z {
  d: path("m10 6 -5 5h4l-5 5");
}

.v6vao-e4h {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 6 -5 5h4l-5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vkgzknivo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 18h3l3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="v6vao-e4h"/><path class="vkgzknivo"/><path class="v-jogvb5z"/><path class="racsvxx3t"/></g>`,
		"fallback": "iconmind:event-spike-duotone-bold",
	});
}

export default Component;
