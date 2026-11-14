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
		"content": `<style>.ttb-wqg0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.572 20.5H4c-.6 0-1-.4-1-1c0-3.147 3.048-5.357 7.1-5.493m3.459-4.43q.226-.268.402-.572t.296-.633t.182-.676Q14.5 7.351 14.5 7q0-.197-.019-.392q-.02-.196-.058-.388q-.038-.193-.095-.381t-.132-.37q-.076-.181-.168-.355q-.093-.173-.202-.336t-.234-.316q-.125-.151-.264-.29t-.29-.264t-.316-.234q-.163-.109-.336-.202q-.174-.092-.355-.168q-.182-.075-.37-.132t-.381-.095t-.388-.058T10.5 3q-.349 0-.693.06q-.343.061-.671.18t-.631.293t-.57.398M3.5 3.5l17 17");
}
</style><path class="ttb-wqg0c"/>`,
		"fallback": "uix-sharp:block-player",
	});
}

export default Component;
