import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyhzemb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyhzemb6k"/>`,
		"fallback": "ci:folder-minus",
	});
}

export default Component;
