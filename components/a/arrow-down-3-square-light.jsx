import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7v35776a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7v35776a"/>`,
		"fallback": "iconamoon:arrow-down-3-square-light",
	});
}

export default Component;
