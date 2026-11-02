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
		"content": `<style>.n6hchxmzx {
  fill: currentColor;
  d: path("M4 19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0Zm2-3v-4c0-.265.105-.52.293-.707l3-3a1 1 0 0 1 1.414 0L13 10.586l5.293-5.293A1 1 0 0 1 20 6v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1");
}
</style><path class="n6hchxmzx"/>`,
		"fallback": "coolicons:chart-area-fill-sharp",
	});
}

export default Component;
