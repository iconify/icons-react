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
		"content": `<style>.b5rbpxbdb {
  d: path("M14 4h6v6");
}

.bc7uaebvz {
  d: path("m12 12 8 -8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zww0vqboc {
  d: path("M10 6H4v14h14v-6");
}
</style><g class="s0phu2bbs"><path class="zww0vqboc"/><path class="bc7uaebvz"/><path class="b5rbpxbdb"/></g>`,
		"fallback": "iconmind:external-link-outline-bold",
	});
}

export default Component;
