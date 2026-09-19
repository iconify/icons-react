import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb-r98ulw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb-r98ulw"/>`,
		"fallback": "f7:arrowtriangle-left-circle-fill",
	});
}

export default Component;
