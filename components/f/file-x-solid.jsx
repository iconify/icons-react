import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz9-nx68p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz9-nx68p"/>`,
		"fallback": "mynaui:file-x-solid",
	});
}

export default Component;
