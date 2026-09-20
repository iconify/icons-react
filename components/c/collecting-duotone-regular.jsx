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
		"content": `<style>.cnjkjfbvs {
  d: path("M3 5v14h18V5Z");
}

.kc9g0xbtf {
  d: path("M5.5 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n2gldhbms {
  d: path("M5.5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phma5vbaw {
  d: path("M14.5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rf3zmt9pw {
  fill: currentColor;
  d: path("M5.5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tga9ncbiy {
  fill: currentColor;
  d: path("M14.5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wew0vnk_n {
  d: path("M12 5v14");
}

.wm617w6rh {
  fill: currentColor;
  d: path("M5.5 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ybjj6ac-t {
  fill: currentColor;
  d: path("M3 5v14h18V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ybjj6ac-t"/><path class="rf3zmt9pw"/><path class="tga9ncbiy"/><path class="wm617w6rh"/><path class="cnjkjfbvs"/><path class="wew0vnk_n"/><path class="n2gldhbms"/><path class="phma5vbaw"/><path class="kc9g0xbtf"/></g>`,
		"fallback": "iconmind:collecting-duotone-regular",
	});
}

export default Component;
