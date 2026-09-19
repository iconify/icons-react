import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7b09gbsy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7b09gbsy"/>`,
		"fallback": "f7:gamecontroller-alt-fill",
	});
}

export default Component;
