import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mckkhbbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mckkhbbii"/>`,
		"fallback": "streamline-cyber:group-global",
	});
}

export default Component;
