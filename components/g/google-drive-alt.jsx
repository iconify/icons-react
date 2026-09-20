import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id3e5ebcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id3e5ebcp"/>`,
		"fallback": "uil:google-drive-alt",
	});
}

export default Component;
