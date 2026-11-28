import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nat0y94jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nat0y94jm"/>`,
		"fallback": "noviair:certificate-check",
	});
}

export default Component;
