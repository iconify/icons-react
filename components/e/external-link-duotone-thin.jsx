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

.bf3tjvl-t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 12 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lars80xge {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 4h6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rgqkl84gj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 6H4v14h14v-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zww0vqboc {
  d: path("M10 6H4v14h14v-6");
}
</style><g class="hntgybcog"><path class="rgqkl84gj"/><path class="bf3tjvl-t"/><path class="lars80xge"/><path class="zww0vqboc"/><path class="bc7uaebvz"/><path class="b5rbpxbdb"/></g>`,
		"fallback": "iconmind:external-link-duotone-thin",
	});
}

export default Component;
