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
		"content": `<style>.lx1g1oh2o {
  fill: currentColor;
  d: path("M14.25 19H8.366q-.691 0-1.153-.462t-.463-1.154V7.5q0-.213.143-.357T7.25 7t.357.143t.143.357v9.885q0 .23.192.423t.423.192h5.885q.214 0 .357.143t.143.357t-.143.357t-.357.143m-3.5-12.5q-.71 0-1.201-.491q-.491-.492-.491-1.201t.491-1.201q.492-.491 1.201-.491t1.201.49q.491.492.491 1.202t-.491 1.2t-1.201.492m5.5 14.5v-4h-6q-.633 0-1.066-.434q-.434-.433-.434-1.066V9.73q0-.857.571-1.428t1.429-.571t1.429.571t.571 1.429V15h3q.633 0 1.066.434q.434.433.434 1.066V21q0 .214-.143.357t-.357.143t-.357-.143T16.25 21");
}
</style><path class="lx1g1oh2o"/>`,
		"fallback": "material-symbols-light:airline-seat-recline-normal-outline-rounded",
	});
}

export default Component;
