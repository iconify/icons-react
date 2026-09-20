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
		"content": `<style>.xejb5dbsc {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M7 11.5a3.5 3.5 0 0 0 2.004 3.164c.024.838.236 1.628.595 2.331L9.5 17h-4A2.5 2.5 0 0 1 3 14.5v-6A2.5 2.5 0 0 1 5.5 6H7zm7.5.5a.5.5 0 0 0-.5.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.5-.5m0-9A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-7.919 3.957A2.5 2.5 0 0 1 8 11.5v-6A2.5 2.5 0 0 1 10.5 3z");
}
</style><path class="xejb5dbsc"/>`,
		"fallback": "fluent:copy-add-20-filled",
	});
}

export default Component;
