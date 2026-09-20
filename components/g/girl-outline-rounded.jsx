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
		"content": `<style>.o15fpdyjt {
  fill: currentColor;
  d: path("M11.032 7.099q-.397-.401-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397t-.964-.401m-.378 11.055v-3h-.57q-.428 0-.664-.348t-.093-.733l1.664-4.794q.123-.327.394-.514q.271-.188.612-.188q.342 0 .616.188t.397.514l1.663 4.794q.143.385-.093.733t-.664.348h-.57v3q0 .343-.232.575t-.575.233h-1.077q-.344 0-.576-.233t-.232-.575");
}
</style><path class="o15fpdyjt"/>`,
		"fallback": "material-symbols-light:girl-outline-rounded",
	});
}

export default Component;
