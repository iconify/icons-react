import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0s08bcuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0s08bcuc"/>`,
		"fallback": "grommet-icons:document-update",
	});
}

export default Component;
