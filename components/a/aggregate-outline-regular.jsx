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
		"content": `<style>.adiugjbhs {
  d: path("m15 9 3 3 -3 3");
}

.b603-acaz {
  d: path("M10 12h8");
}

.nkayykbew {
  d: path("m3 19 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pesxdybze {
  d: path("M3 12h7");
}

.s9xdwbcyw {
  d: path("m3 5 7 7");
}
</style><g class="nrj6p8qat"><path class="s9xdwbcyw"/><path class="pesxdybze"/><path class="nkayykbew"/><path class="b603-acaz"/><path class="adiugjbhs"/></g>`,
		"fallback": "iconmind:aggregate-outline-regular",
	});
}

export default Component;
