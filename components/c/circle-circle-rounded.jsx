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
		"content": `<style>.ypk41gswt {
  fill: currentColor;
  d: path("M8.494 20.299q-1.642-.701-2.867-1.926t-1.926-2.867T3 12t.701-3.506t1.926-2.857T8.494 3.71T12 3t3.506.71t2.857 1.927t1.926 2.857T21 12t-.71 3.506t-1.926 2.867t-2.858 1.926T12 21t-3.506-.701m6.534-5.261q1.241-1.251 1.241-3.038t-1.241-3.028T12 7.731T8.963 8.972T7.712 12t1.25 3.038T12 16.288t3.028-1.25");
}
</style><path class="ypk41gswt"/>`,
		"fallback": "material-symbols-light:circle-circle-rounded",
	});
}

export default Component;
