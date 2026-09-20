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
		"content": `<style>.h7wibbbny {
  d: path("M3 6v14");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.ler50rfbf {
  d: path("M9 8v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.xl6k1lbjd {
  d: path("M15 8v12");
}

.y4qjbbcmm {
  d: path("M21 6v14");
}
</style><g class="nrj6p8qat"><path class="vhnbtvbtn"/><path class="jkuojibnm"/><path class="h7wibbbny"/><path class="ler50rfbf"/><path class="xl6k1lbjd"/><path class="y4qjbbcmm"/></g>`,
		"fallback": "iconmind:crib-outline-regular",
	});
}

export default Component;
