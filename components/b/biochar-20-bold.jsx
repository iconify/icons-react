import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm0xcdcgi.css';
import '../../css/b/b2xtvx_in.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm0xcdcgi"/><path class="b2xtvx_in"/>`,
		"fallback": "energy-icons:biochar-20-bold",
	});
}

export default Component;
