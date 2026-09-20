import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze5oi5l2j.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze5oi5l2j"/>`,
		"fallback": "wi:direction-down",
	});
}

export default Component;
