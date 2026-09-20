import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2g4ygt8c.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2g4ygt8c"/>`,
		"fallback": "wi:direction-left",
	});
}

export default Component;
