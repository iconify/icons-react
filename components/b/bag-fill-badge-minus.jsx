import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gizxpmbyo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gizxpmbyo"/>`,
		"fallback": "f7:bag-fill-badge-minus",
	});
}

export default Component;
