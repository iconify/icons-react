import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2tt5m46q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2tt5m46q"/>`,
		"fallback": "heroicons:chart-bar-square",
	});
}

export default Component;
