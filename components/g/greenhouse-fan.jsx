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
		"content": `<style>.atv66_b1j {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.nzrwgubfo {
  d: path("M12 10c-1.5-2.5-1-5 1.5-5c1.5 1.5 1 3.5-1.5 5Zm2 2c2.5-1.5 5-1 5 1.5c-1.5 1.5-3.5 1-5-1.5Zm-2 2c1.5 2.5 1 5-1.5 5c-1.5-1.5-1-3.5 1.5-5Zm-2-2c-2.5 1.5-5 1-5-1.5c1.5-1.5 3.5-1 5 1.5Z");
}

.q6pzhfb3c {
  d: path("M2 2h20v20H2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q6pzhfb3c"/><path class="nzrwgubfo"/><path class="atv66_b1j"/></g>`,
		"fallback": "uix-sharp:greenhouse-fan",
	});
}

export default Component;
