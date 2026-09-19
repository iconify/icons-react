import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y44xfd8fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y44xfd8fd"/>`,
		"fallback": "iconoir:google-circle-solid",
	});
}

export default Component;
