import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk_861ltb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk_861ltb"/>`,
		"fallback": "ix:collapse-all",
	});
}

export default Component;
