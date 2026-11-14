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
		"content": `<style>.qvce25iyb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 11q.001-3.831 2.71-6.539T12 1.753t6.54 2.708T21.25 11q0 .161-.067.309q-.066.147-.188.254v.001l-6.109 5.376q.364.579.364 1.31v1q0 1.036-.732 1.768t-1.768.732h-1.5q-1.036 0-1.768-.732T8.75 19.25v-1q0-.832.277-1.387l-6.022-5.3q-.122-.107-.188-.254q-.067-.147-.067-.309m7.446 4.893q.455-.143 1.054-.143v-4H5.488zm2.554-.143q.537 0 .993.197l.012-.01l4.757-4.187H12.75z");
}
</style><path class="qvce25iyb"/>`,
		"fallback": "uix-solid:dropper",
	});
}

export default Component;
