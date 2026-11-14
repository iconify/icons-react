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
		"content": `<style>.oqaqus8fd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 4.5q0-2.75 2.75-2.75h7q.149 0 .287.057t.243.163l5 5q.106.105.163.243t.057.287v12q0 2.75-2.75 2.75H7q-2.75 0-2.75-2.75zM12 9.75h-1.375q-3.375 0-3.375 3.375v2.75q0 3.375 3.375 3.375h2.75q3.375 0 3.375-3.375v-2.75q0-3.375-3.375-3.375z");
}
</style><path class="oqaqus8fd"/>`,
		"fallback": "uix-solid:esim",
	});
}

export default Component;
