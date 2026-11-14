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
		"content": `<style>.vnr5vlbgs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.75 6.25H13q2.75 0 2.75 2.75v3.75H19q1.25 0 1.25-1.25v-6q0-1.25-1.25-1.25h-8q-1.25 0-1.25 1.25zm6 8v.25q0 2.75-2.75 2.75H8.811L6.03 20.03q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.106-.105-.163-.243T4.75 19.5v-2.256q-2.5-.122-2.5-2.744V9q0-2.75 2.75-2.75h3.25V5.5q0-2.75 2.75-2.75h8q2.75 0 2.75 2.75v6q0 2.75-2.75 2.75z");
}
</style><path class="vnr5vlbgs"/>`,
		"fallback": "uix-solid:chat-double",
	});
}

export default Component;
