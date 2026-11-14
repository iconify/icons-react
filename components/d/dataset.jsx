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
		"content": `<style>.a1rpn1wgv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 6v12q0 3.25 3.25 3.25h13q1.346 0 2.298-.952T21.75 18V6q0-1.346-.952-2.298T18.5 2.75h-13q-1.346 0-2.298.952T2.25 6m8.5 13.75V15.5h9.5V18q0 .725-.513 1.237q-.512.513-1.237.513zm-1.5-4.25v4.25H5.5q-1.75 0-1.75-1.75v-2.5zm1.5-1.5V9.75h9.5V14zm-1.5-4.25V14h-5.5V9.75z");
}
</style><path class="a1rpn1wgv"/>`,
		"fallback": "uix-solid:dataset",
	});
}

export default Component;
