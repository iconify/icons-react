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
		"content": `<style>.fhluz1bdh {
  d: path("M11 12h5");
}

.l3ca9u8kt {
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mlnbe9bja {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rxwr8htky {
  fill: currentColor;
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y76hd_85j {
  d: path("M2 6a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="mlnbe9bja"/><path class="rxwr8htky"/><path class="y76hd_85j"/><path class="fhluz1bdh"/><path class="l3ca9u8kt"/></g>`,
		"fallback": "iconmind:edge-node-duotone-regular",
	});
}

export default Component;
