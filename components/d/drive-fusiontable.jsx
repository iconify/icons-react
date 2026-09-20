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
		"content": `<style>.aw3nstbpe {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM19 8.096l-5.78 6.454l-3.99-3.988L5 14.792v1.427l4.23-4.23L13.243 16L19 9.596z");
}
</style><path class="aw3nstbpe"/>`,
		"fallback": "material-symbols-light:drive-fusiontable",
	});
}

export default Component;
