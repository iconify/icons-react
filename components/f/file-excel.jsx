import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvjy-drzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvjy-drzn"/>`,
		"fallback": "fe:file-excel",
	});
}

export default Component;
