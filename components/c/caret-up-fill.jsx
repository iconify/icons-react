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
		"content": `<style>.ch15pybdl {
  d: path("M11.544 6.25868L5.0727 17.2159C4.86742 17.5635 5.12126 18 5.52868 18H18.4713C18.8787 18 19.1326 17.5635 18.9273 17.2159L12.456 6.25868C12.2523 5.91377 11.7477 5.91377 11.544 6.25868Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xgh9gsnin {
  fill: currentColor;
  d: path("M11.544 6.25868L5.0727 17.2159C4.86742 17.5635 5.12126 18 5.52868 18H18.4713C18.8787 18 19.1326 17.5635 18.9273 17.2159L12.456 6.25868C12.2523 5.91377 11.7477 5.91377 11.544 6.25868Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="xgh9gsnin"/><path class="ch15pybdl"/></g>`,
		"fallback": "keyline-icons:caret-up-fill",
	});
}

export default Component;
