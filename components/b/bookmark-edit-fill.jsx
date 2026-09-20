import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd69s5b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd69s5b7f"/>`,
		"fallback": "mingcute:bookmark-edit-fill",
	});
}

export default Component;
