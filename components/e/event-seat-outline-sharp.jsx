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
		"content": `<style>.ogngubq9y {
  fill: currentColor;
  d: path("M4.5 20.308v-5h15v5h-1v-4h-13v4zM4 13.654v-2h2v2zm3.77-.116v-9.73h8.46v9.73zm10.23.116v-2h2v2zm-9.23-1.115h6.46V4.808H8.77zm0 0h6.46z");
}
</style><path class="ogngubq9y"/>`,
		"fallback": "material-symbols-light:event-seat-outline-sharp",
	});
}

export default Component;
