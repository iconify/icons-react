import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmji0zbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kmji0zbni"/>`,
		"fallback": "solar:creative-commons-bold",
	});
}

export default Component;
