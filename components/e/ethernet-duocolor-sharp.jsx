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
		"content": `<style>.gelqk848u {
  d: path("M3 4h18v13h-4v4H7v-4H3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q6v94_xbf {
  stroke-opacity: 0.4;
  d: path("M6 8v3m4-3v3m4-3v3m4-3v3");
}
</style><g class="nrj6p8qat"><path class="q6v94_xbf"/><path class="gelqk848u"/></g>`,
		"fallback": "coolicons:ethernet-duocolor-sharp",
	});
}

export default Component;
