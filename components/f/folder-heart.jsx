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
		"content": `<style>.dv7yyullz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4.25Q2.25 4.25 2.25 7v10q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-7.189L10.03 4.47q-.105-.106-.243-.163T9.5 4.25zm6.629 12.652Q8 14.836 8 12.25q0-2.5 2.5-2.5q.89 0 1.5.523q.61-.523 1.5-.523q2.5 0 2.5 2.5q0 2.586-3.629 4.652q-.085.048-.179.073T12 17t-.192-.025t-.179-.073");
}
</style><path class="dv7yyullz"/>`,
		"fallback": "uix-solid:folder-heart",
	});
}

export default Component;
