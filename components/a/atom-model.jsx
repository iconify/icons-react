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
		"content": `<style>.ei8we7kng {
  d: path("M18.75 5.25a9.5 4-45 1 1-13.5 13.5a9.5 4-45 1 1 13.5-13.5Z");
}

.fup-0ib7j {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8.25 0h.01");
}

.jg_rdmb9q {
  d: path("M5.25 5.25a9.5 4 45 1 1 13.5 13.5a9.5 4 45 1 1-13.5-13.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jg_rdmb9q"/><path class="ei8we7kng"/><path class="fup-0ib7j"/></g>`,
		"fallback": "uix-sharp:atom-model",
	});
}

export default Component;
