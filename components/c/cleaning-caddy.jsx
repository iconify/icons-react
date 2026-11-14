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
		"content": `<style>.l9-cy5hwv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.75 11.25h3.625q3.375 0 3.375 3.375v3.25q0 3.375-3.375 3.375H5.625q-1.398 0-2.386-.989q-.989-.988-.989-2.386v-3.25q0-1.837 1-2.674V8.5q0-1.75 1.75-1.75h1q1.75 0 1.75 1.75v2.75h1.5V6.5q0-2.25 2.25-2.25h1q.932 0 1.591.659T14.75 6.5zm-8.5 0V8.5q0-.25-.25-.25H5q-.25 0-.25.25v2.816q.405-.066.875-.066zm4.5 0V6.5q0-.75.75-.75h1q.75 0 .75.75v4.75z");
}
</style><path class="l9-cy5hwv"/>`,
		"fallback": "uix-solid:cleaning-caddy",
	});
}

export default Component;
