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
		"content": `<style>.hwkcvpp-j {
  d: path("M12 6a6 6 0 1 1 -6 6");
}

.ihfql7bsw {
  d: path("M12 9a3 3 0 1 1 -3 3");
}

.mcj52c2nx {
  d: path("M12 3a9 9 0 1 1 -9 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mcj52c2nx"/><path class="hwkcvpp-j"/><path class="ihfql7bsw"/></g>`,
		"fallback": "iconmind:epoch-outline-regular",
	});
}

export default Component;
