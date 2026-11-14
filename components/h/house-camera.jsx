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
		"content": `<style>.s5b5c1fit {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.935 9.143L9.81 4.132q2.19-1.866 4.38 0l5.875 5.011q1.185 1.011 1.185 2.568v6.164q0 3.375-3.375 3.375H6.125q-3.375 0-3.375-3.375v-6.164q0-1.557 1.185-2.568m10.94.857h-5.75Q5.75 10 5.75 13.375v1.75q0 3.375 3.375 3.375h5.75q3.375 0 3.375-3.375v-1.75Q18.25 10 14.875 10");
}
</style><path class="s5b5c1fit"/>`,
		"fallback": "uix-solid:house-camera",
	});
}

export default Component;
