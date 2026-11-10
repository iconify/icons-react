import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niv4b8c3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niv4b8c3p"/>`,
		"fallback": "matita:gamma",
	});
}

export default Component;
