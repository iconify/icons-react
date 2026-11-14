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
		"content": `<style>.jim3asmme {
  d: path("M12 9.5q.5 2 2.5 2.5q-2 .5-2.5 2.5q-.5-2-2.5-2.5q2-.5 2.5-2.5Z");
}

.t9ctlnboy {
  d: path("M4 4a11.31 4 45 0 0 16 16A11.31 4 45 0 0 4 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyvvwvutj {
  d: path("M20 4A11.31 4-45 0 0 4 20A11.31 4-45 0 0 20 4Z");
}
</style><g class="ulnmmdpxh"><path class="t9ctlnboy"/><path class="zyvvwvutj"/><path class="jim3asmme"/></g>`,
		"fallback": "uix-sharp:astrophysics",
	});
}

export default Component;
