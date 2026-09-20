import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzws7klud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzws7klud"/>`,
		"fallback": "streamline-freehand-color:data-transfer-horizontal",
	});
}

export default Component;
