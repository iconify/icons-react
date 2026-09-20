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
		"content": `<style>.f0k-qn7fa {
  d: path("m20 7 -4 4 4 4Z");
}

.geztznlon {
  d: path("m4 7 4 4 -4 4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zicuro7zb {
  d: path("M10 8h4v6h-4Z");
}
</style><g class="nrj6p8qat"><path class="geztznlon"/><path class="f0k-qn7fa"/><path class="zicuro7zb"/></g>`,
		"fallback": "iconmind:dress-code-outline-regular",
	});
}

export default Component;
