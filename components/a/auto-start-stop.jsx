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
		"content": `<style>.ogotumxvb {
  d: path("M17.303 6.697A7.5 7.5 0 1 1 12 4.5");
}

.opf9-sbyl {
  d: path("M10.25 2.75L12 4.5l-1.75 1.75m4.225 4.025a3.5 3.5 0 1 1-4.95 0M12 8.75v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ogotumxvb"/><path class="opf9-sbyl"/></g>`,
		"fallback": "uix-sharp:auto-start-stop",
	});
}

export default Component;
