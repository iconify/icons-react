import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m29_9ds_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m29_9ds_z"/>`,
		"fallback": "mingcute:folder-infor-line",
	});
}

export default Component;
