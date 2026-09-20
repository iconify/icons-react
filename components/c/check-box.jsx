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
		"content": `<style>.tjw58cf0k {
  fill: currentColor;
  d: path("m10.6 15.508l6.396-6.396l-.707-.708l-5.689 5.688l-2.85-2.85l-.708.708zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="tjw58cf0k"/>`,
		"fallback": "material-symbols-light:check-box",
	});
}

export default Component;
