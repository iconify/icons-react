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
		"content": `<style>.xli9nxqxe {
  fill: currentColor;
  d: path("M11 9.586V4a1.002 1.002 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414L13.414 12l3.293 3.293a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 11 20v-5.586l-2.293 2.293a.999.999 0 1 1-1.414-1.414L10.586 12L7.293 8.707a.999.999 0 1 1 1.414-1.414Zm2 4.828v3.172L14.586 16Zm0-4.828L14.586 8L13 6.414Z");
}
</style><path class="xli9nxqxe"/>`,
		"fallback": "coolicons:bluetooth-fill-sharp",
	});
}

export default Component;
