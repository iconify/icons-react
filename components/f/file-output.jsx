import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqy9tkbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqy9tkbbx"/>`,
		"fallback": "vadivam:file-output",
	});
}

export default Component;
