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
		"content": `<style>.fro7chkre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.36 15.869l4.546 7.887l-9.278 8.322m-1.874-16.21l4.547 7.888l-9.278 8.322m21.099-14.913h8.13c2.81 0 4.669 1.96 4.166 4.397c-.504 2.436-3.173 4.397-5.984 4.397h-9.762l-1.896 6.173M9.383 16.016l-.936 3.087m-.995 3.287L4.5 32.132");
}
</style><path class="fro7chkre"/>`,
		"fallback": "arcticons:instapay",
	});
}

export default Component;
