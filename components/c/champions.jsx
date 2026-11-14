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
		"content": `<style>.f46no9bxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 9.5l.852.947a1.5 1.5 0 0 0 2.422-.268l2.169-3.855a1.5 1.5 0 0 1 2.614 0l2.169 3.855a1.5 1.5 0 0 0 2.422.268l.852-.947a.923.923 0 0 1 1.59.798l-1.099 5.496A1.5 1.5 0 0 1 17.77 17H6.23a1.5 1.5 0 0 1-1.471-1.206L3.66 10.298A.923.923 0 0 1 5.25 9.5M5 20.5h14M12 13h.01");
}
</style><path class="f46no9bxa"/>`,
		"fallback": "uix:champions",
	});
}

export default Component;
