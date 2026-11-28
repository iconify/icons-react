import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkq-xq00b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkq-xq00b"/>`,
		"fallback": "iconaut:file-chart-column-solid",
	});
}

export default Component;
