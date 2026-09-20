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
		"content": `<style>.d9j2xyvdd {
  d: path("m3 19 9 -9 9 9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vm7z8yblu {
  d: path("m12 3 4 4h-4");
}

.yvwbi-etd {
  d: path("M12 2v8");
}
</style><g class="nrj6p8qat"><path class="d9j2xyvdd"/><path class="yvwbi-etd"/><path class="vm7z8yblu"/></g>`,
		"fallback": "iconmind:festival-outline-regular",
	});
}

export default Component;
