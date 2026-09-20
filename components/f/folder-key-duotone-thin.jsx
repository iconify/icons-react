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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.e3tmhtu7v {
  fill: currentColor;
  d: path("M8 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n31jz7zrd {
  d: path("M14.5 13v2.5");
}

.qi3wr9i3q {
  d: path("M8 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.suqljdbde {
  d: path("M12 13h3.5");
}
</style><g class="hntgybcog"><path class="r0jamibkm"/><path class="e3tmhtu7v"/><path class="bn_pu6j-z"/><path class="qi3wr9i3q"/><path class="suqljdbde"/><path class="n31jz7zrd"/></g>`,
		"fallback": "iconmind:folder-key-duotone-thin",
	});
}

export default Component;
