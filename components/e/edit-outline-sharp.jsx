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
		"content": `<style>.shdrzpbdc {
  fill: currentColor;
  d: path("M5 19h1.098L16.796 8.302l-1.098-1.098L5 17.902zm-1 1v-2.52l13.875-13.9l2.54 2.563L6.52 20zM19 6.112L17.889 5zm-2.762 1.65l-.54-.558l1.098 1.098z");
}
</style><path class="shdrzpbdc"/>`,
		"fallback": "material-symbols-light:edit-outline-sharp",
	});
}

export default Component;
