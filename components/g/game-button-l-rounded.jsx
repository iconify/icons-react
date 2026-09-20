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
		"content": `<style>.tginodw6j {
  fill: currentColor;
  d: path("M3 17.385V8.269q0-1.356.977-2.322t2.35-.966h11.346q1.373 0 2.35.966T21 8.269v9.116q0 .666-.474 1.14T19.385 19H4.615q-.666 0-1.14-.475T3 17.386m8.72-3.102V9.329q0-.173-.128-.3q-.127-.125-.302-.125t-.3.126t-.127.299v4.984q0 .344.233.576t.575.232h2.546q.178 0 .298-.121q.121-.121.121-.299t-.12-.298t-.299-.12z");
}
</style><path class="tginodw6j"/>`,
		"fallback": "material-symbols-light:game-button-l-rounded",
	});
}

export default Component;
