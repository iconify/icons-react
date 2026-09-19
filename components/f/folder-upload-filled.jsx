import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk994-b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk994-b6x"/>`,
		"fallback": "griddy-icons:folder-upload-filled",
	});
}

export default Component;
