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
		"content": `<style>.f4fg8zbxd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 14V4h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdlyngb5v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 20 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.olzfpgbos {
  d: path("M4 14V4h10");
}

.pilb5jbne {
  d: path("M20 20 4 4");
}
</style><g class="hntgybcog"><path class="jdlyngb5v"/><path class="f4fg8zbxd"/><path class="pilb5jbne"/><path class="olzfpgbos"/></g>`,
		"fallback": "iconmind:arrow-up-left-duotone-thin",
	});
}

export default Component;
