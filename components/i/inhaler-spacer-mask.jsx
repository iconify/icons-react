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
		"content": `<style>.bqnbtxbkq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.25 2.25h1q1.036 0 1.768.732T9.75 4.75v4.5q0 .541-.2 1h6.403q.866-1.75 2.797-1.75q3.5 0 3.5 5.75T18.75 20q-1.931 0-2.797-1.75H4.5q-2.75 0-2.75-2.75V13q0-2.467 2.213-2.721q-.213-.47-.213-1.029v-4.5q0-2.5 2.5-2.5m-1.75 9.5h10.966q-.216 1.073-.216 2.5t.216 2.5H4.5q-1.25 0-1.25-1.25V13q0-1.25 1.25-1.25");
}
</style><path class="bqnbtxbkq"/>`,
		"fallback": "uix-solid:inhaler-spacer-mask",
	});
}

export default Component;
