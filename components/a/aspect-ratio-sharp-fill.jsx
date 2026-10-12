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
		"content": `<style>.yrq27nbuc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 3L22 3C22.5523 3 23 3.4477 23 4L23 20C23 20.5523 22.5523 21 22 21L2 21C1.4477 21 1 20.5523 1 20L1 4C1 3.4477 1.4477 3 2 3ZM13 7L13 9L17 9L17 13L19 13L19 8C19 7.4477 18.5523 7 18 7L13 7ZM7 11L5 11L5 16C5 16.5523 5.4477 17 6 17L11 17L11 15L7 15L7 11Z");
}
</style><path clip-rule="evenodd" class="yrq27nbuc"/>`,
		"fallback": "keyline-icons:aspect-ratio-sharp-fill",
	});
}

export default Component;
