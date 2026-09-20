import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocgok7zrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ocgok7zrs"/>`,
		"fallback": "streamline-freehand-color:charging-battery-empty",
	});
}

export default Component;
