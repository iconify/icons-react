import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.de5jbcc6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.34 32.886l-1.635 4.903C8.48 35.93 3.927 32.634 5.22 30.607c.528-.827 1.654-1.422 3.55-.956c2.752.675 6.537 2.806 7.568 3.235c9.098 4.179 14.614 5.844 26.661.573c-4.233-5.064-13.665-17.872-15.502-22.662c-.318-.766-1.108-.79-1.463-.016C19.367 22.488 9.173 26.582 5.488 30.267");
}
</style><path class="de5jbcc6m"/>`,
		"fallback": "arcticons:cloaked",
	});
}

export default Component;
