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
		"content": `<style>.pc-2gwbij {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861t4.861 2.014h4.75q2.848 0 4.861-2.014t2.014-4.861v-4.75q0-2.848-2.014-4.861T14.375 2.75M6.25 9q0-2.75 2.75-2.75T11.75 9T9 11.75T6.25 9m9.5-2q2.75 0 2.75 2.75t-2.75 2.75T13 9.75T15.75 7M8 15.75Q8 13 10.75 13t2.75 2.75t-2.75 2.75T8 15.75");
}
</style><path class="pc-2gwbij"/>`,
		"fallback": "uix-solid:foam-material",
	});
}

export default Component;
