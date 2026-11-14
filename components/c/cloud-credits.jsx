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
		"content": `<style>.qrbua1bil {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.803 19.724q-3.827-1.042-4.047-5.002q-.21-3.785 3.15-5.286Q7.599 4.989 12.47 5.2q4.841.211 6.155 4.735q2.694 1.104 3.081 3.849Q20.516 13 19 13h-2q-2.071 0-3.536 1.464Q12 15.929 12 18q0 .937.3 1.75H7q-.1 0-.197-.026M17 14.25q-3.75 0-3.75 3.75T17 21.75h2q3.75 0 3.75-3.75T19 14.25zM14.75 18q0-2.25 2.25-2.25T19.25 18T17 20.25T14.75 18m6.5 0q0 1.371-.835 1.906q.335-.785.335-1.906t-.335-1.906q.835.535.835 1.906M17 17q-1 0-1 1t1 1t1-1t-1-1");
}
</style><path class="qrbua1bil"/>`,
		"fallback": "uix-solid:cloud-credits",
	});
}

export default Component;
