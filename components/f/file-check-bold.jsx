import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhj7tk-5q.css';
import '../../css/h/h4-0w54pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhj7tk-5q"/><path clip-rule="evenodd" class="h4-0w54pu"/>`,
		"fallback": "solar:file-check-bold",
	});
}

export default Component;
