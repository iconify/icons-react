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
		"content": `<style>.ekgj4ew5d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 21v-3h12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hlkk9_bki {
  d: path("M7 10c0 4 2 6 5 6s5 -2 5 -6");
}

.hpttoacje {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 10V5h10v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hq4rplb4u {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 10c0 4 2 6 5 6s5 -2 5 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tb3ak12-o {
  d: path("M6 21v-3h12v3");
}

.wu-svqt-l {
  d: path("M7 10V5h10v5");
}
</style><g class="nrj6p8qat"><path class="hpttoacje"/><path class="hq4rplb4u"/><path class="ekgj4ew5d"/><path class="wu-svqt-l"/><path class="hlkk9_bki"/><path class="tb3ak12-o"/></g>`,
		"fallback": "iconmind:game-avatar-duotone-regular",
	});
}

export default Component;
