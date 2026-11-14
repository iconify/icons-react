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
		"content": `<style>.bu-n_6p4e {
  d: path("M3.5 3h17a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm-1 5h19M6 5.5h.01M9 5.5h.01");
}

.ek3j44uaj {
  d: path("m11.303 12.349l.077-1.044h1.24l.077 1.044l1.033.597l.943-.455l.62 1.073l-.865.59v1.192l.865.59l-.62 1.073l-.943-.455l-1.033.597l-.077 1.044h-1.24l-.077-1.044l-1.033-.597l-.943.455l-.62-1.073l.865-.59v-1.192l-.865-.59l.62-1.073l.943.455Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bu-n_6p4e"/><path class="ek3j44uaj"/></g>`,
		"fallback": "uix-sharp:browser-devtools",
	});
}

export default Component;
