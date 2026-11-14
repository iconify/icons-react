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
		"content": `<style>.d3bvnebfk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.75 4.25h-8q-1.243 0-2.121.879q-.879.878-.879 2.121q0 3 3 3h8q3 0 3-3t-3-3m-1.5 9.5h8q3 0 3 3t-3 3h-8q-3 0-3-3t3-3");
}
</style><path class="d3bvnebfk"/>`,
		"fallback": "uix-solid:gantt-lead",
	});
}

export default Component;
