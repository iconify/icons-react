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
		"content": `<style>.zxi4rpbni {
  fill: currentColor;
  d: path("M11.032 7.099q-.397-.401-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397t-.964-.401m-.378 11.055v-3.808h-.192q-.344 0-.576-.232t-.232-.575V9.923q0-.555.395-.95q.396-.396.951-.396h2q.555 0 .95.395q.396.396.396.951v3.616q0 .343-.232.575t-.576.232h-.192v3.808q0 .343-.232.575t-.576.233h-1.077q-.343 0-.575-.233t-.232-.575");
}
</style><path class="zxi4rpbni"/>`,
		"fallback": "material-symbols-light:boy-rounded",
	});
}

export default Component;
