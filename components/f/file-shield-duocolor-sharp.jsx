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
		"content": `<style>.cesmxqb_w {
  d: path("M13 3H5v18h14V9m-6-6l6 6m-6-6v6h6");
}

.flb34pbmw {
  stroke-opacity: 0.4;
  d: path("M12 12h3v2c0 2-1 3-3 4c-2-1-3-2-3-4v-2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="flb34pbmw"/><path class="cesmxqb_w"/></g>`,
		"fallback": "coolicons:file-shield-duocolor-sharp",
	});
}

export default Component;
