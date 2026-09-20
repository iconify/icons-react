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
		"content": `<style>.x4js-fbiq {
  fill: currentColor;
  d: path("M1 15V9h1.5v2h2V9H6v6H4.5v-2.5h-2V15zm7.5 0v-4.5H7V9h4.5v1.5H10V15zm5.5 0v-4.5h-1.5V9H17v1.5h-1.5V15zm4 0V9h3.5q.6 0 1.05.45T23 10.5v1q0 .6-.45 1.05T21.5 13h-2v2zm1.5-3.5h2v-1h-2z");
}
</style><path class="x4js-fbiq"/>`,
		"fallback": "material-symbols:http",
	});
}

export default Component;
