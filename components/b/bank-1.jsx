import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxxo2obwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxxo2obwx"/>`,
		"fallback": "streamline-cyber:bank-1",
	});
}

export default Component;
