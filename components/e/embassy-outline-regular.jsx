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
		"content": `<style>.ef2afnbgy {
  d: path("M4 21V10h16v11");
}

.lmoarbbkf {
  d: path("M12 3h7v4h-7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.yvwbi-etd {
  d: path("M12 2v8");
}
</style><g class="nrj6p8qat"><path class="ef2afnbgy"/><path class="oqfv9rb9x"/><path class="yvwbi-etd"/><path class="lmoarbbkf"/></g>`,
		"fallback": "iconmind:embassy-outline-regular",
	});
}

export default Component;
