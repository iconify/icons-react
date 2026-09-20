import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjosf6zur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjosf6zur"/>`,
		"fallback": "tabler:file-cv-filled",
	});
}

export default Component;
