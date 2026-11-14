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
		"content": `<style>.of-ai0ajc {
  d: path("M10.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25 4.75l-5.5 5.75m-.5-5.25h.01m6.49 5h.01");
}

.ttsqbcboh {
  d: path("M12 2.5L19.5 8v11.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ttsqbcboh"/><path class="of-ai0ajc"/></g>`,
		"fallback": "uix-sharp:carbon-tax-tag",
	});
}

export default Component;
