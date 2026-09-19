import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz7b-8bsv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz7b-8bsv"/>`,
		"fallback": "fa-brands:google-wallet",
	});
}

export default Component;
