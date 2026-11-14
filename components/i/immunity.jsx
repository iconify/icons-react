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
		"content": `<style>.reiytvzoh {
  d: path("M12 17v-5L8.5 8.5M12 12l3.5-3.5m-8 1l2-2m5 0l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_zvs3q8k {
  d: path("m12 2.5l7.5 3V11c0 5-3.5 8.75-7.5 10.5C8 19.75 4.5 16 4.5 11V5.5Z");
}
</style><g class="ulnmmdpxh"><path class="x_zvs3q8k"/><path class="reiytvzoh"/></g>`,
		"fallback": "uix-sharp:immunity",
	});
}

export default Component;
