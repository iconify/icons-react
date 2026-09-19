import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igm4--b3a.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igm4--b3a"/>`,
		"fallback": "el:credit-card",
	});
}

export default Component;
