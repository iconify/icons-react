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
		"content": `<style>.jdqylbbkf {
  d: path("m9 14 2 2 4 -4");
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

.ntbbvlkxf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 14 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pga6n1bci {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.x6ei3vbab {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="x6ei3vbab"/><path class="pga6n1bci"/><path class="ntbbvlkxf"/><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="jdqylbbkf"/></g>`,
		"fallback": "iconmind:bell-check-duotone-regular",
	});
}

export default Component;
