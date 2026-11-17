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
		"content": `<style>.g9-g9zb0l {
  stroke-opacity: 0.4;
  d: path("m19 13l-4 4h5l-4 4");
}

.l7dpryp5e {
  d: path("M13 3H5v18h4m4-18l6 6m-6-6v6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="g9-g9zb0l"/><path class="l7dpryp5e"/></g>`,
		"fallback": "coolicons:file-zap-corner-duocolor-sharp",
	});
}

export default Component;
