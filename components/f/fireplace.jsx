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
		"content": `<style>.nvu9mcc9k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.125 3.25h11.75q3.375 0 3.375 3.375v11.25q0 3.375-3.375 3.375H15q2.25 0 2.25-2.25v-8.5q0-2.25-2.25-2.25H9q-2.25 0-2.25 2.25V19q0 2.25 2.25 2.25H6.125q-3.375 0-3.375-3.375V6.625q0-3.375 3.375-3.375");
}
</style><path class="nvu9mcc9k"/>`,
		"fallback": "uix-solid:fireplace",
	});
}

export default Component;
