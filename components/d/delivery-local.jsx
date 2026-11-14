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
		"content": `<style>.e26tc7byh {
  d: path("m12 5.5l3.5 2v4l-3.5 2l-3.5-2v-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vec6jx-ea {
  d: path("m8.5 7.5l3.5 2l3.5-2m-3.5 2v4");
}

.weez58bvj {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12Z");
}
</style><g class="ulnmmdpxh"><path class="weez58bvj"/><path class="e26tc7byh"/><path class="vec6jx-ea"/></g>`,
		"fallback": "uix-sharp:delivery-local",
	});
}

export default Component;
