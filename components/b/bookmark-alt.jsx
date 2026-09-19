import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja00h22ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja00h22ea"/>`,
		"fallback": "bxs:bookmark-alt",
	});
}

export default Component;
