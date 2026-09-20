import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itqrxbc0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itqrxbc0n"/>`,
		"fallback": "thesvg-color:filedotio",
	});
}

export default Component;
