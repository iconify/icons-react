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
		"content": `<style>.hsltakbul {
  fill: currentColor;
  d: path("M5.616 19q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5h12.769q.69 0 1.153.463T20 6.616v10.769q0 .69-.462 1.153T18.384 19z");
}
</style><path class="hsltakbul"/>`,
		"fallback": "material-symbols-light:crop-5-4-rounded",
	});
}

export default Component;
