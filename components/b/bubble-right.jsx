import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2cfpnpgv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2cfpnpgv"/>`,
		"fallback": "f7:bubble-right",
	});
}

export default Component;
