import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt-eicc_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt-eicc_z"/>`,
		"fallback": "ri:drag-move-2-line",
	});
}

export default Component;
