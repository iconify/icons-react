import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgazbqqng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgazbqqng"/>`,
		"fallback": "grommet-icons:document-download",
	});
}

export default Component;
