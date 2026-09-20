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
		"content": `<style>.yu-3ixbin {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM7.5 16.5h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zm1.707-7.293Q9.5 8.914 9.5 8.5t-.293-.707T8.5 7.5t-.707.293T7.5 8.5t.293.707t.707.293t.707-.293");
}
</style><path class="yu-3ixbin"/>`,
		"fallback": "material-symbols-light:imagesmode",
	});
}

export default Component;
