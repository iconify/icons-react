import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxu-vsg4p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxu-vsg4p"/>`,
		"fallback": "f7:drop-triangle",
	});
}

export default Component;
