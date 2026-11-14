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
		"content": `<style>.eww9gwb1h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.629 5.629q.878-.879 2.121-.879q3 0 3 3v3.5h6.5v-3.5q0-3 3-3q1.243 0 2.121.879q.879.878.879 2.121v8.5q0 1.243-.879 2.121q-.878.879-2.121.879q-3 0-3-3v-3.5h-6.5v3.5q0 3-3 3t-3-3v-8.5q0-1.243.879-2.121");
}
</style><path class="eww9gwb1h"/>`,
		"fallback": "uix-solid:dumbbell",
	});
}

export default Component;
