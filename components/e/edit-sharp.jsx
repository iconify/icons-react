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
		"content": `<style>.m1guh_o6n {
  fill: currentColor;
  d: path("M4 20v-2.52l13.875-13.9l2.54 2.563L6.52 20zM17.504 7.589L19 6.111L17.889 5l-1.477 1.496z");
}
</style><path class="m1guh_o6n"/>`,
		"fallback": "material-symbols-light:edit-sharp",
	});
}

export default Component;
