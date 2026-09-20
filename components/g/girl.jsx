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
		"content": `<style>.z8hbppn9j {
  fill: currentColor;
  d: path("M11.032 7.099q-.397-.401-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397t-.964-.401m-.378 11.863v-3.808H8.942l2.049-5.875q.123-.327.394-.514q.271-.188.612-.188q.342 0 .616.188t.397.514l2.048 5.875h-1.712v3.808z");
}
</style><path class="z8hbppn9j"/>`,
		"fallback": "material-symbols-light:girl",
	});
}

export default Component;
