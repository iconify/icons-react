import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyj9v4bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyj9v4bqt"/>`,
		"fallback": "coolicons:folder-minus-fill-round",
	});
}

export default Component;
