import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukw76obbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukw76obbn"/>`,
		"fallback": "uil:file-medical-alt",
	});
}

export default Component;
