import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_fowhusy.css';
import '../../css/q/qccz5acbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_fowhusy"/><path class="qccz5acbe"/>`,
		"fallback": "token:dext",
	});
}

export default Component;
