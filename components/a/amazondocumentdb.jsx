import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmds795_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmds795_k"/>`,
		"fallback": "simple-icons:amazondocumentdb",
	});
}

export default Component;
