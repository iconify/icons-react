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
		"content": `<style>.n9q2v5brr {
  fill: currentColor;
  d: path("M11.032 7.099q-.397-.401-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397t-.964-.401m-.378 11.863v-4.616h-1V9.923q0-.555.395-.95q.396-.396.951-.396h2q.555 0 .95.395q.396.396.396.951v4.423h-1v4.616z");
}
</style><path class="n9q2v5brr"/>`,
		"fallback": "material-symbols-light:boy-outline",
	});
}

export default Component;
