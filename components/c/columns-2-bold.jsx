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
		"content": `<style>.eaw7fzylm {
  fill: currentColor;
  d: path("M11.25 21H10C6.22876 21 4.34345 20.9997 3.17188 19.8281C2.0003 18.6566 2 16.7712 2 13V11C2 7.22876 2.0003 5.34345 3.17188 4.17188C4.34345 3.0003 6.22876 3 10 3H11.25V21ZM14 3C17.7712 3 19.6566 3.0003 20.8281 4.17188C21.9997 5.34345 22 7.22876 22 11V13C22 16.7712 21.9997 18.6566 20.8281 19.8281C19.6566 20.9997 17.7712 21 14 21H12.75V3H14Z");
}
</style><path class="eaw7fzylm"/>`,
		"fallback": "solar:columns-2-bold",
	});
}

export default Component;
