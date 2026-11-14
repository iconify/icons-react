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
		"content": `<style>.dal0q1bok {
  d: path("M5 4v16a7 1.5 0 0 0 14 0V4M5 8.25h14m-14 9.5h14");
}

.ikfh12bws {
  d: path("M12 10.75L14.25 13L12 15.25L9.75 13Z");
}

.qc820dtfb {
  d: path("M5 4a7 1.5 0 1 0 14 0A7 1.5 0 1 0 5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qc820dtfb"/><path class="dal0q1bok"/><path class="ikfh12bws"/></g>`,
		"fallback": "uix-sharp:chemical-drum",
	});
}

export default Component;
