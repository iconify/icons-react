import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7gabzios.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7gabzios"/>`,
		"fallback": "f7:arrowtriangle-left-circle",
	});
}

export default Component;
