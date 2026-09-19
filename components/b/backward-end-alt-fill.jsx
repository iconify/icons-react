import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glh0ax5dc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glh0ax5dc"/>`,
		"fallback": "f7:backward-end-alt-fill",
	});
}

export default Component;
