import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txyd36pzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txyd36pzr"/>`,
		"fallback": "mage:health-square-fill",
	});
}

export default Component;
