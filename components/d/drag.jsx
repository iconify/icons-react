import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvge1vtpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvge1vtpp"/>`,
		"fallback": "grommet-icons:drag",
	});
}

export default Component;
