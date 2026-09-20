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
		"content": `<style>.jkuojibnm {
  d: path("M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qbvk0cc3q {
  d: path("m3 9 2 -2");
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.v4cpchbya {
  d: path("m21 9 -2 -2");
}
</style><g class="nrj6p8qat"><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="qbvk0cc3q"/><path class="v4cpchbya"/></g>`,
		"fallback": "iconmind:bell-ring-outline-regular",
	});
}

export default Component;
