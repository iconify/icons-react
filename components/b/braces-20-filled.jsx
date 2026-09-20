import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r3crcbc2k {
  fill: currentColor;
  d: path("M3.494 5.752a2.75 2.75 0 0 1 2.75-2.75a.75.75 0 0 1 0 1.5c-.69 0-1.25.56-1.25 1.25L5 8.382c0 .6-.21 1.169-.576 1.618c.366.448.576 1.017.576 1.618v2.636c0 .69.56 1.25 1.25 1.25a.75.75 0 1 1 0 1.5a2.75 2.75 0 0 1-2.75-2.75v-2.636c0-.397-.222-.76-.574-.942a.75.75 0 0 1 0-1.353c.352-.181.574-.544.574-.941zm13.012 0a2.75 2.75 0 0 0-2.75-2.75a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25L15 8.382c0 .6.21 1.169.576 1.618A2.56 2.56 0 0 0 15 11.618v2.636c0 .69-.56 1.25-1.25 1.25a.75.75 0 1 0 0 1.5a2.75 2.75 0 0 0 2.75-2.75v-2.636c0-.397.222-.76.574-.942a.75.75 0 0 0 0-1.353a1.06 1.06 0 0 1-.574-.941z");
}
</style><path class="r3crcbc2k"/>`,
		"fallback": "fluent:braces-20-filled",
	});
}

export default Component;
