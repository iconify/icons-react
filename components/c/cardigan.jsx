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
		"content": `<style>.czkpr2bld {
  d: path("m8.5 3l3.5 7.5L15.5 3M12 13.25h.01M12 16h.01M12 18.75h.01");
}

.rb-djacal {
  d: path("m8.5 3l-4 1.5C3.5 4.83 3 5.75 3 6.75V21.5h18V6.75c0-1-.5-1.92-1.5-2.25l-4-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rb-djacal"/><path class="czkpr2bld"/></g>`,
		"fallback": "uix-sharp:cardigan",
	});
}

export default Component;
