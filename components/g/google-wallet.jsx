import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvmop950l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvmop950l"/>`,
		"fallback": "icons8:google-wallet",
	});
}

export default Component;
