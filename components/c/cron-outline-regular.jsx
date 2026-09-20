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
		"content": `<style>.a0ad3xbzg {
  d: path("M12 3a9 9 0 1 0 9 9");
}

.dm5ccobgo {
  d: path("M12 12h4");
}

.icp673bbo {
  d: path("M12 9v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v2c2asm0d {
  d: path("M21 4v5h-5");
}
</style><g class="nrj6p8qat"><path class="a0ad3xbzg"/><path class="v2c2asm0d"/><path class="icp673bbo"/><path class="dm5ccobgo"/></g>`,
		"fallback": "iconmind:cron-outline-regular",
	});
}

export default Component;
