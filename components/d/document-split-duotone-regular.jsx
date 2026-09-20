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
		"content": `<style>.bp9na9-yx {
  d: path("M10 3H4v16h6");
}

.dndig7bcz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 5h6v16h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nb24kydlo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 3H4v16h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vl0d0wtss {
  d: path("M14 5h6v16h-6");
}
</style><g class="nrj6p8qat"><path class="nb24kydlo"/><path class="dndig7bcz"/><path class="bp9na9-yx"/><path class="vl0d0wtss"/></g>`,
		"fallback": "iconmind:document-split-duotone-regular",
	});
}

export default Component;
