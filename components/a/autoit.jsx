import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrkrr4jyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrkrr4jyy"/>`,
		"fallback": "simple-icons:autoit",
	});
}

export default Component;
