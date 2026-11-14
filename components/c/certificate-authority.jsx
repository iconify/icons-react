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
		"content": `<style>.fsnubybdy {
  d: path("M9.2 16H3V2.5h18V16h-.2M7 7h10M7 10.5h4");
}

.ifab9_b5h {
  d: path("M12 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrwpmzbeu {
  d: path("M13.5 18.5V21l1.5-1l1.5 1v-2.5");
}
</style><g class="ulnmmdpxh"><path class="fsnubybdy"/><path class="ifab9_b5h"/><path class="vrwpmzbeu"/></g>`,
		"fallback": "uix-sharp:certificate-authority",
	});
}

export default Component;
