import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ywfcvbcef {
  fill: currentColor;
  d: path("M39.75 8A4.25 4.25 0 0 1 44 12.25v26.5a1.25 1.25 0 1 1-2.5 0V18.5H24v17.25A4.25 4.25 0 0 1 19.75 40H8.25A4.25 4.25 0 0 1 4 35.75v-23.5A4.25 4.25 0 0 1 8.25 8zM6.5 35.75c0 .967.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V18.5h-15zM16.75 23a1.25 1.25 0 1 1 0 2.5h-5.5a1.25 1.25 0 1 1 0-2.5zm-8.5-12.5a1.75 1.75 0 0 0-1.75 1.75V16h35v-3.75a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="ywfcvbcef"/>`,
		"fallback": "fluent:desk-48-regular",
	});
}

export default Component;
