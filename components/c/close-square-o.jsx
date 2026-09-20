import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sla9g7bca.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sla9g7bca"/>`,
		"fallback": "uiw:close-square-o",
	});
}

export default Component;
