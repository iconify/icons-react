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
		"content": `<style>.p6yc0gbgj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q2.589 0 4.419 1.831Q18.25 5.411 18.25 8v8q0 2.589-1.831 4.419Q14.589 22.25 12 22.25t-4.419-1.831Q5.75 18.589 5.75 16V8q0-2.589 1.831-4.419Q9.411 1.75 12 1.75m0 3Q8.75 4.75 8.75 8T12 11.25T15.25 8T12 4.75M8.75 16q0-3.25 3.25-3.25T15.25 16T12 19.25T8.75 16");
}
</style><path class="p6yc0gbgj"/>`,
		"fallback": "uix-solid:go-no-go",
	});
}

export default Component;
