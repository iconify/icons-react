import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m81es4bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m81es4bfz"/>`,
		"fallback": "grommet-icons:document-notes",
	});
}

export default Component;
