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
		"content": `<style>.jaifx49uu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 5q0-3.25 3.25-3.25T15.25 5q0 1.979-1.206 2.753l3.354 7.546q.291-.051.602-.051q1.347 0 2.299.953t.951 2.298q.001 1.347-.951 2.3T18 21.752t-2.299-.953t-.951-2.298v-.002q-.001-1.346.951-2.298q.158-.158.327-.29L12.61 8.218q-.289.032-.61.032t-.61-.032l-3.346 7.529q1.206.774 1.206 2.753q0 3.25-3.25 3.25T2.75 18.5T6 15.25q.321 0 .61.032l3.346-7.529Q8.75 6.979 8.75 5");
}
</style><path class="jaifx49uu"/>`,
		"fallback": "uix-solid:binary-tree",
	});
}

export default Component;
