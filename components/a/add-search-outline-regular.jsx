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
		"content": `<style>.jlfjgzbqx {
  d: path("M9 9h6");
}

.mvkhxckkt {
  d: path("M12 6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p367mshbv {
  d: path("M5.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
}

.rseiusb3q {
  d: path("M16.5 14.5 21 19");
}
</style><g class="nrj6p8qat"><path class="p367mshbv"/><path class="rseiusb3q"/><path class="mvkhxckkt"/><path class="jlfjgzbqx"/></g>`,
		"fallback": "iconmind:add-search-outline-regular",
	});
}

export default Component;
