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
		"content": `<style>.i0yop5bkv {
  fill: currentColor;
  d: path("M18 22H6a3 3 0 0 1-3-3v-7c0-1.039.578-1.992 1.293-2.707l6-6a2.414 2.414 0 0 1 3.414 0l6 6C20.422 10.008 21 10.961 21 12v7a3 3 0 0 1-3 3M9.236 9.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M16.901 20a5.003 5.003 0 0 0-9.802 0Z");
}
</style><path class="i0yop5bkv"/>`,
		"fallback": "coolicons:house-user-fill",
	});
}

export default Component;
