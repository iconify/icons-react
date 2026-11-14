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
		"content": `<style>.bztwv6pvy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.75 14.75V7.5q0-3.75 3.75-3.75H20q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T20 5.25h-3.25v2h1q2.5 0 2.5 2.5t-2.5 2.5h-3.5q-2.5 0-2.5-2.5t2.5-2.5h1v-2H8.5q-2.25 0-2.25 2.25v7.25h13.5q1.036 0 1.768.732t.732 1.768v.5q0 1.036-.732 1.768t-1.768.732H4.25q-2.5 0-2.5-2.5v-.5q0-2.5 2.5-2.5z");
}
</style><path class="bztwv6pvy"/>`,
		"fallback": "uix-solid:embosser",
	});
}

export default Component;
