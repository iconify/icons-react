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
		"content": `<style>.a46bghb1i {
  d: path("M18 10v6");
}

.ejfmpibyt {
  d: path("M7 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.fgh6wnb3a {
  d: path("M6 17a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qhdq2dbof {
  fill: currentColor;
  d: path("M7 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qvtmo6b3b {
  d: path("M15 13h6");
}
</style><g class="hntgybcog"><path class="qhdq2dbof"/><path class="ejfmpibyt"/><path class="fgh6wnb3a"/><path class="a46bghb1i"/><path class="qvtmo6b3b"/></g>`,
		"fallback": "iconmind:connection-request-duotone-thin",
	});
}

export default Component;
