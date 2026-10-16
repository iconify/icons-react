import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/metz4187g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="metz4187g"/>`,
		"fallback": "ix:alarm-multiple",
	});
}

export default Component;
