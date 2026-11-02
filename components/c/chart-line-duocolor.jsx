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
		"content": `<style>.jjfa9c8yk {
  d: path("m3 16l4-4a1.414 1.414 0 0 1 2 0l2 2a1.414 1.414 0 0 0 2 0l8-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nt-syvbnj {
  stroke-opacity: 0.4;
  d: path("M3 4v14a2 2 0 0 0 2 2h16");
}
</style><g class="nrj6p8qat"><path class="nt-syvbnj"/><path class="jjfa9c8yk"/></g>`,
		"fallback": "coolicons:chart-line-duocolor",
	});
}

export default Component;
