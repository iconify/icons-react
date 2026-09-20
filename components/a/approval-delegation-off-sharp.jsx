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
		"content": `<style>.tgjrawh9b {
  fill: currentColor;
  d: path("m13.54 11.05l-3.538-3.539l.714-.688l2.825 2.825l5.675-5.65l.688.688zm7.39 10.035l-.707.707L2.419 3.99l.708-.708zM7 19.583v-6.737h2.08q.137 0 .284.028q.145.028.282.078l4.948 1.796L17 17.154h-2.133q-.51 0-.995-.06q-.486-.061-.95-.227l-1.793-.644l-.287.744l1.964.675q.473.16.977.22q.504.061 1.02.061h2.966l2.152 2.152l-5.3 1.733zM3 21v-8.154h3V21z");
}
</style><path class="tgjrawh9b"/>`,
		"fallback": "material-symbols-light:approval-delegation-off-sharp",
	});
}

export default Component;
