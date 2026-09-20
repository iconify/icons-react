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
		"content": `<style>.rxsbpt71g {
  fill: currentColor;
  d: path("M2 19v-9l4-4h1V4h2v2h9l4 4v9zm14-2h4v-6.175l-2-2l-2 2zM4 17h10v-5H4z");
}
</style><path class="rxsbpt71g"/>`,
		"fallback": "material-symbols:gite",
	});
}

export default Component;
