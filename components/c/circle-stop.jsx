import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnf2dtqof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnf2dtqof"/>`,
		"fallback": "keyline-icons:circle-stop",
	});
}

export default Component;
