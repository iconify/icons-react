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
		"content": `<style>.aarw6cciy {
  d: path("M4 2.5h16A1.5 1.5 0 0 1 21.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5Z");
}

.grn83eohb {
  d: path("M9.292 11.522a2.75 2.75 0 0 1 2.23-2.23");
}

.rq866kbao {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aarw6cciy"/><path class="rq866kbao"/><path class="grn83eohb"/></g>`,
		"fallback": "uix-sharp:aircraft-rivet",
	});
}

export default Component;
