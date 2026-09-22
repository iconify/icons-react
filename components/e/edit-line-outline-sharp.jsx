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
		"content": `<style>.lwadrb7ks {
  fill: currentColor;
  d: path("M5 19h1.098L16.796 8.302l-1.098-1.098L5 17.902zm-1 1v-2.52L17.914 3.555l2.526 2.544L6.52 20zM19.02 6.092l-1.112-1.111zm-2.782 1.67l-.54-.558l1.098 1.098zM9.896 20l1-1H21v1z");
}
</style><path class="lwadrb7ks"/>`,
		"fallback": "material-symbols-light:edit-line-outline-sharp",
	});
}

export default Component;
