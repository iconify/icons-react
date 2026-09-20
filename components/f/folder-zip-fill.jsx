import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg_5gel2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg_5gel2m"/>`,
		"fallback": "mingcute:folder-zip-fill",
	});
}

export default Component;
