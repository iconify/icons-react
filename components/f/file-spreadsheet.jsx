import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdyx0-b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdyx0-b0m"/>`,
		"fallback": "noviair:file-spreadsheet",
	});
}

export default Component;
