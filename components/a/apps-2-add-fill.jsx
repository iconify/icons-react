import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnz4es2ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnz4es2ff"/>`,
		"fallback": "ri:apps-2-add-fill",
	});
}

export default Component;
