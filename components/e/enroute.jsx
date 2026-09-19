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
		"content": `<style>.rd3b9bbfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.986 15.35c-.063 0-.124.008-.186.01a10.697 10.697 0 0 0-19.988-3.212c-.065-.001-.127-.01-.192-.01a9.12 9.12 0 0 0 0 18.24h20.366a7.514 7.514 0 1 0 0-15.028m-6.499 17.395l12.609 3.211l-10.39 5.573v-4.392zm-6.565 4.392h3.495m-11.004 0h3.495m-11.004 0h3.495");
}
</style><path class="rd3b9bbfk"/>`,
		"fallback": "arcticons:enroute",
	});
}

export default Component;
