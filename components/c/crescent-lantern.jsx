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
		"content": `<style>.a18q6hvpy {
  d: path("M12 2.5v2.25M8.5 7l1.25-2.25h4.5L15.5 7M6 7h12v12.5H6Zm3.5 12.5v2h5v-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7p_9acqy {
  d: path("M13.5 10a3.25 3.25 0 0 0 0 6.5a4.5 4.5 0 0 1 0-6.5Z");
}
</style><g class="ulnmmdpxh"><path class="a18q6hvpy"/><path class="x7p_9acqy"/></g>`,
		"fallback": "uix-sharp:crescent-lantern",
	});
}

export default Component;
