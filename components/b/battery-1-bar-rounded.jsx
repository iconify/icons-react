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
		"content": `<style>.dbm-o4l9p {
  fill: currentColor;
  d: path("M8.696 21q-.352 0-.581-.232q-.23-.233-.23-.576V5.288q0-.343.232-.575t.575-.232h1.616v-.673q0-.344.232-.576T11.116 3h1.769q.343 0 .575.232t.232.576v.673h1.62q.344 0 .574.232t.23.575v14.904q0 .344-.233.576t-.575.232zm.189-3h6.23V5.462h-6.23z");
}
</style><path class="dbm-o4l9p"/>`,
		"fallback": "material-symbols-light:battery-1-bar-rounded",
	});
}

export default Component;
