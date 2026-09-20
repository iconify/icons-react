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
		"content": `<style>.b8iynqbad {
  d: path("M13 8v10");
}

.h4nnknbvo {
  d: path("M17 13v5");
}

.i-xxtdbfm {
  d: path("M9 11v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.zw6iqebrn {
  d: path("M12 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="i-xxtdbfm"/><path class="b8iynqbad"/><path class="h4nnknbvo"/><path class="zw6iqebrn"/></g>`,
		"fallback": "iconmind:histogram-bucket-outline-regular",
	});
}

export default Component;
