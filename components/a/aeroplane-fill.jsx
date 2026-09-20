import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fljd5rbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fljd5rbvi"/>`,
		"fallback": "mage:aeroplane-fill",
	});
}

export default Component;
