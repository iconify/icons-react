import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icn-0wbfj.css';
import '../../css/d/dnot0zbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icn-0wbfj"/><path class="dnot0zbxj"/>`,
		"fallback": "boxicons:folder-search-filled",
	});
}

export default Component;
