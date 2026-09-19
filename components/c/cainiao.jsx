import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxkbl7sqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxkbl7sqx"/>`,
		"fallback": "cbi:cainiao",
	});
}

export default Component;
