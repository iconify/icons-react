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
		"content": `<style>.nc-wa3s9l {
  d: path("M12 6.5C10 5 6.5 4.5 2.5 5v13.5c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5V5c-4-.5-7.5 0-9.5 1.5Zm0 0V20");
}

.q1oo96b6h {
  d: path("M5.25 8.75h4v4h-4Zm9.5.75h4m-4 3.75h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nc-wa3s9l"/><path class="q1oo96b6h"/></g>`,
		"fallback": "uix-sharp:illuminated-manuscript",
	});
}

export default Component;
