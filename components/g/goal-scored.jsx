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
		"content": `<style>.huf6y2b8y {
  d: path("M5.25 20.5L6 8h12l.75 12.5");
}

.pc6ywjqim {
  d: path("M2.5 20.5v-16h19v16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywj-u12sl {
  d: path("M8.75 15.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="pc6ywjqim"/><path class="huf6y2b8y"/><path class="ywj-u12sl"/></g>`,
		"fallback": "uix-sharp:goal-scored",
	});
}

export default Component;
