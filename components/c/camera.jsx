import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc9yycyos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc9yycyos"/>`,
		"fallback": "grommet-icons:camera",
	});
}

export default Component;
