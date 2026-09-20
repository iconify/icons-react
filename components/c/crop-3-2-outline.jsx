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
		"content": `<style>.caktzqbdr {
  fill: currentColor;
  d: path("M5.616 17q-.691 0-1.153-.462T4 15.385v-6.77q0-.69.463-1.152T5.616 7h12.769q.69 0 1.153.463T20 8.616v6.769q0 .69-.462 1.153T18.384 17zm0-1h12.769q.23 0 .423-.192t.192-.423v-6.77q0-.23-.192-.423T18.384 8H5.616q-.231 0-.424.192T5 8.616v6.769q0 .23.192.423t.423.192M5 16V8z");
}
</style><path class="caktzqbdr"/>`,
		"fallback": "material-symbols-light:crop-3-2-outline",
	});
}

export default Component;
