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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qvj-m-brn {
  d: path("M13 13a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.xvljocc-j {
  d: path("M13 20a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2");
}
</style><g class="nrj6p8qat"><path class="skbifdbcx"/><path class="qvj-m-brn"/><path class="xvljocc-j"/></g>`,
		"fallback": "iconmind:agent-queue-outline-regular",
	});
}

export default Component;
