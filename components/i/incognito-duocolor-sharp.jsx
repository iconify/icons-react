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
		"content": `<style>.ffbyqdb3a {
  stroke-opacity: 0.4;
  d: path("M4 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m10 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-4 0a2 2 0 1 1 4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ynry8n4rd {
  d: path("m6 10l2-6h8l2 6M3 10h18");
}
</style><g class="nrj6p8qat"><path class="ffbyqdb3a"/><path class="ynry8n4rd"/></g>`,
		"fallback": "coolicons:incognito-duocolor-sharp",
	});
}

export default Component;
