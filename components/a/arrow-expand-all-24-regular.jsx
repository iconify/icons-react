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
		"content": `<style>.fkq9-bbtj {
  fill: currentColor;
  d: path("M2 4.75A.75.75 0 0 1 2.75 4h18.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m10 4a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M7.28 19.78a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L6 17.44V8.75a.75.75 0 0 1 1.5 0v8.69l1.72-1.72a.75.75 0 1 1 1.06 1.06z");
}
</style><path class="fkq9-bbtj"/>`,
		"fallback": "fluent:arrow-expand-all-24-regular",
	});
}

export default Component;
