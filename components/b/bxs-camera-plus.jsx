import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8fgs1blq.css';
import '../../css/t/taswdu53c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8fgs1blq"/><path class="taswdu53c"/>`,
		"fallback": "bx:bxs-camera-plus",
	});
}

export default Component;
