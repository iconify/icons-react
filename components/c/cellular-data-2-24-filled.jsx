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
		"content": `<style>.uiy42wgya {
  fill: currentColor;
  d: path("M16 8c.552 0 1 .446 1 .995v10.01c0 .55-.448.995-1 .995s-1-.446-1-.995V8.995c0-.55.448-.995 1-.995m-4 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m-4 3c.552 0 1 .445 1 .994v4.012c0 .549-.448.994-1 .994s-1-.445-1-.994v-4.012A.997.997 0 0 1 8 14m-4 3c.552 0 1 .44 1 .984v1.032A.99.99 0 0 1 4 20c-.552 0-1-.44-1-.984v-1.032A.99.99 0 0 1 4 17");
}
</style><path class="uiy42wgya"/>`,
		"fallback": "fluent:cellular-data-2-24-filled",
	});
}

export default Component;
