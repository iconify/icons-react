import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7tqqkh9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7tqqkh9b"/>`,
		"fallback": "ri:file-history-fill",
	});
}

export default Component;
