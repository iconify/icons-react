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
		"content": `<style>.aaofdybgo {
  d: path("m9 18 3 -3 3 3");
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tl_0od7zv {
  d: path("M6 10.5h12");
}

.ysxlqwpgz {
  d: path("M12 10.5V15");
}
</style><g class="nrj6p8qat"><path class="fozhwebbv"/><path class="tl_0od7zv"/><path class="ysxlqwpgz"/><path class="aaofdybgo"/></g>`,
		"fallback": "iconmind:accessibility-test-outline-regular",
	});
}

export default Component;
