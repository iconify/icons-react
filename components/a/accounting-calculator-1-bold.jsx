import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft06mxbzl.css';
import '../../css/d/dlzqyubkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft06mxbzl"/><path class="dlzqyubkb"/>`,
		"fallback": "streamline-ultimate:accounting-calculator-1-bold",
	});
}

export default Component;
