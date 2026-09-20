import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szv9ucwib.css';
import '../../css/x/xenb14b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szv9ucwib"/><path class="xenb14b2g"/>`,
		"fallback": "mage:home-security-lock-fill",
	});
}

export default Component;
