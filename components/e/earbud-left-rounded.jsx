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
		"content": `<style>.xr8sux5bu {
  fill: currentColor;
  d: path("M8.404 21q-.69 0-1.153-.462t-.462-1.153v-7.712H5.615q-.69 0-1.153-.462T4 10.058V6.616q0-.691.463-1.153T5.616 5h5.173q.309 0 .539.23t.23.54v13.615q0 .69-.463 1.153T9.942 21zm10.173-8.913q-1.423 1.586-3.538 1.586q-.31 0-.52-.21t-.211-.52V3.73q0-.31.21-.52t.52-.211q2.116 0 3.539 1.577T20 8.327t-1.423 3.76");
}
</style><path class="xr8sux5bu"/>`,
		"fallback": "material-symbols-light:earbud-left-rounded",
	});
}

export default Component;
