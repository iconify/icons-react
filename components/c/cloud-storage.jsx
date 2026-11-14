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
		"content": `<style>.d58aiccga {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 12.5q-.145 0-.28-.054q-2.425-.977-2.177-3.579q.224-2.354 2.345-2.988q1.074-3.663 5.029-3.975q3.942-.312 5.579 3.114q3.254.239 3.254 3.732q0 3.75-3.75 3.75zm5 1.25q-6.25 0-6.25 2.25v4q0 2.25 6.25 2.25T18.25 20v-4q0-2.25-6.25-2.25M7.25 20v-2.335q1.562.585 4.75.585t4.75-.585V20q0 .75-4.75.75T7.25 20");
}
</style><path class="d58aiccga"/>`,
		"fallback": "uix-solid:cloud-storage",
	});
}

export default Component;
