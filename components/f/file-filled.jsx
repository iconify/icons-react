import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_a7_nbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_a7_nbik"/>`,
		"fallback": "griddy-icons:file-filled",
	});
}

export default Component;
