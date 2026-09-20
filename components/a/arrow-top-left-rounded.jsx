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
		"content": `<style>.yjdc53bix {
  fill: currentColor;
  d: path("m6.921 9.5l3.439 3.439q.165.165.162.353q-.003.189-.162.354q-.166.165-.364.159t-.344-.153L5.566 9.566q-.131-.132-.184-.268T5.329 9t.053-.298t.184-.267L9.64 4.359q.165-.165.356-.165q.192 0 .357.165q.165.166.156.364t-.156.344L6.92 8.5h9.464q.67 0 1.143.472q.472.472.472 1.144V18.5q0 .214-.143.357T17.5 19t-.357-.143T17 18.5v-8.384q0-.27-.173-.443t-.442-.173z");
}
</style><path class="yjdc53bix"/>`,
		"fallback": "material-symbols-light:arrow-top-left-rounded",
	});
}

export default Component;
