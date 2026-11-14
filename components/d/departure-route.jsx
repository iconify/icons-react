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
		"content": `<style>.tirz6b3en {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.912 4.415h.001l.557.9q.697 1.125.053 2.28q-.597 1.072-1.778 1.149q-.159 11.045-5.09 11.713q-.169.592-.637 1.061q-.732.732-1.768.732h-7q-1.036 0-1.768-.732T1.75 19.75q0-2.5 2.5-2.5h7q2.047 0 2.418 1.676q3.448-.796 3.577-10.183q-1.174-.08-1.768-1.148q-.644-1.155.052-2.28l.559-.9Q16.747 3.35 18 3.35t1.912 1.065");
}
</style><path class="tirz6b3en"/>`,
		"fallback": "uix-solid:departure-route",
	});
}

export default Component;
