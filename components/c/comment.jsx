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
		"content": `<style>.e_8s5-d8b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.744 20.886q-4.367 1.853-8.36-.573l-3.178.908q-.071.02-.145.026q-.073.007-.147-.002q-.073-.008-.143-.031q-.071-.023-.135-.058t-.121-.084q-.056-.048-.102-.106t-.08-.123t-.054-.137q-.059-.206 0-.412l.908-3.178q-2.426-3.993-.573-8.36q1.922-4.527 6.75-5.465T18.67 5.83q3.477 3.478 2.539 8.306t-5.465 6.75");
}
</style><path class="e_8s5-d8b"/>`,
		"fallback": "uix-solid:comment",
	});
}

export default Component;
