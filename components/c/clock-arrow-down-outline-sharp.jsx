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
		"content": `<style>.p9fezqbns {
  fill: currentColor;
  d: path("M4.207 16.441q-1.86-1.867-1.86-4.534T4.208 7.37T8.733 5.5t4.532 1.867t1.87 4.534q0 2.666-1.867 4.537t-4.534 1.87t-4.527-1.867M19.385 19l-2.693-2.692l.714-.708l1.479 1.479V5h1v12.085l1.484-1.485l.708.708zm-6.823-3.265q1.573-1.572 1.573-3.832T12.562 8.07T8.73 6.5T4.908 8.073q-1.562 1.572-1.562 3.832t1.562 3.832q1.561 1.57 3.822 1.57t3.832-1.572m-1.523-.754l.727-.708l-2.516-2.54v-3.54h-1v4zM8.73 11.904");
}
</style><path class="p9fezqbns"/>`,
		"fallback": "material-symbols-light:clock-arrow-down-outline-sharp",
	});
}

export default Component;
