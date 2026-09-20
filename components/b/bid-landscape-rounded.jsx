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
		"content": `<style>.fnkbmkbys {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM19 8.096l-5.78 6.454l-3.424-3.423q-.242-.242-.565-.242t-.565.242L5 14.792v1.427l4.23-4.23l3.416 3.415q.242.242.584.24t.578-.271L19 9.596z");
}
</style><path class="fnkbmkbys"/>`,
		"fallback": "material-symbols-light:bid-landscape-rounded",
	});
}

export default Component;
