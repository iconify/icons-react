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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.dqv6w4kbm {
  d: path("m8 16.5 4 -4 4 4");
}

.foemy1bum {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkw9k9b1p {
  d: path("M9 16.5V21h6v-4.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nyw9-1r_v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 16.5V21h6v-4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qtbc6tb3f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4.5 9.5h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uzpzz4brq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 16.5 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}
</style><g class="nrj6p8qat"><path class="foemy1bum"/><path class="qtbc6tb3f"/><path class="uzpzz4brq"/><path class="nyw9-1r_v"/><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="dqv6w4kbm"/><path class="jkw9k9b1p"/></g>`,
		"fallback": "iconmind:home-cover-duotone-regular",
	});
}

export default Component;
