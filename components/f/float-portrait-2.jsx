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
		"content": `<style>.hi0x7tb9a {
  fill: currentColor;
  d: path("M8.385 11.385h6v-5h-6zm10.615 8q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616z");
}
</style><path class="hi0x7tb9a"/>`,
		"fallback": "material-symbols-light:float-portrait-2",
	});
}

export default Component;
