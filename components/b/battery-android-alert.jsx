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
		"content": `<style>.i5ksqfbad {
  fill: currentColor;
  d: path("M4.385 17q-.994 0-1.69-.695T2 14.615v-5.23q0-.994.696-1.69T4.385 7h13.73v8.616q0 .388.107.734t.284.65zm16.095-.98q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21t-.52-.21m.02-2.904V7.5h1v5.616z");
}
</style><path class="i5ksqfbad"/>`,
		"fallback": "material-symbols-light:battery-android-alert",
	});
}

export default Component;
