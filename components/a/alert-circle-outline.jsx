import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckr9kb1z.css';
import '../../css/i/iu35e1xme.css';
import '../../css/x/xjqcgab4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wckr9kb1z"/><circle class="iu35e1xme"/><path class="xjqcgab4f"/>`,
		"fallback": "eva:alert-circle-outline",
	});
}

export default Component;
