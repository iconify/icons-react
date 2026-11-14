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
		"content": `<style>.v8ynz6bxu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 1.75q-3.5 0-3.5 4.75t3.5 4.75t3.5-4.75T16 1.75m-8 3.5q-3.5 0-3.5 4.75q0 3.079 1.47 4.162q.798.588 2.03.588q3.5 0 3.5-4.75T8 5.25M13.5 15q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5t-2.5-2.5m-8 3.5Q5.5 16 8 16t2.5 2.5T8 21t-2.5-2.5");
}
</style><path class="v8ynz6bxu"/>`,
		"fallback": "uix-solid:audit-walkthrough",
	});
}

export default Component;
