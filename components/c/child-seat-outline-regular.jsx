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
		"content": `<style>.dhw73cmjs {
  d: path("M6 21V6l3 -3h7v12h3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phi1ncbih {
  d: path("M6 15h10");
}
</style><g class="nrj6p8qat"><path class="dhw73cmjs"/><path class="phi1ncbih"/></g>`,
		"fallback": "iconmind:child-seat-outline-regular",
	});
}

export default Component;
