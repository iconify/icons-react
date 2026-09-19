import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbpe4x0tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbpe4x0tx"/>`,
		"fallback": "eva:folder-fill",
	});
}

export default Component;
