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
		"content": `<style>.xq4q_-wqo {
  fill: currentColor;
  d: path("m15.3 19.708l-2.758-2.758l.708-.708l2.05 2.05l5.05-5.05l.708.708zm-7.48-9.2q-.878-.877-.878-2.123T7.82 6.26t2.123-.877t2.124.877t.876 2.123q0 1.247-.876 2.124q-.877.877-2.124.877q-1.246 0-2.123-.877m4.473 3.292l-3.15 3.15l1.685 1.666H2.942v-1.647q0-.767.377-1.232q.377-.466.954-.764q1.275-.65 2.51-1.004q1.234-.353 3.16-.353q.75 0 1.327.046q.578.046 1.022.138");
}
</style><path class="xq4q_-wqo"/>`,
		"fallback": "material-symbols-light:how-to-reg",
	});
}

export default Component;
