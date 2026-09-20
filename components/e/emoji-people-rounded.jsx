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
		"content": `<style>.s-cvh_bne {
  fill: currentColor;
  d: path("M9.808 21V8.333Q8.06 7.994 6.863 6.7T5.358 3.652q-.031-.177.115-.318t.335-.142q.208 0 .354.126t.196.328q.333 1.646 1.569 2.712q1.237 1.065 2.823 1.065h2.5q.577 0 .977.17t.81.578l3.882 3.883q.14.14.15.344t-.15.364t-.353.16q-.195 0-.354-.16l-4.02-4.02V21q0 .214-.143.357t-.357.143t-.356-.143t-.144-.357v-5.384h-2.384V21q0 .214-.143.357t-.357.143t-.357-.143T9.808 21m.991-15.722q-.491-.492-.491-1.201t.491-1.201T12 2.385t1.201.491t.491 1.201t-.491 1.201q-.492.491-1.201.491t-1.201-.491");
}
</style><path class="s-cvh_bne"/>`,
		"fallback": "material-symbols-light:emoji-people-rounded",
	});
}

export default Component;
