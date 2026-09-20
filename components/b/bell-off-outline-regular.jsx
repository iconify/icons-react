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
		"content": `<style>.eo60n2g2k {
  d: path("m6.5 6.5 10 10");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}
</style><g class="nrj6p8qat"><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="eo60n2g2k"/></g>`,
		"fallback": "iconmind:bell-off-outline-regular",
	});
}

export default Component;
