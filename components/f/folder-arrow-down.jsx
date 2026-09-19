import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxvnz6ymq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxvnz6ymq"/>`,
		"fallback": "heroicons-outline:folder-arrow-down",
	});
}

export default Component;
