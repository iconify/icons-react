import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmlxqf6mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmlxqf6mo"/>`,
		"fallback": "noviair:certificate",
	});
}

export default Component;
