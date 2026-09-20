import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhc5wobly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhc5wobly"/>`,
		"fallback": "uil:cloud-database-tree",
	});
}

export default Component;
