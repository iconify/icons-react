import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h0ilq7zqy {
  fill: currentColor;
  d: path("M10 2a8 8 0 0 1 7.996 8.254a5.5 5.5 0 0 0-7.742 7.742a8 8 0 0 1-3.867-.857l-.121-.064l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8m4.5 17a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708");
}
</style><path class="h0ilq7zqy"/>`,
		"fallback": "fluent:chat-arrow-back-20-filled",
	});
}

export default Component;
