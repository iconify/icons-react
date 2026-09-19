import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd53c6jcb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd53c6jcb"/>`,
		"fallback": "codicon:chevron-left-compact",
	});
}

export default Component;
