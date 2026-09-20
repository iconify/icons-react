import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e07hwbb_f.css';
import '../../css/j/jjlq6dbda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e07hwbb_f"/><path class="jjlq6dbda"/>`,
		"fallback": "selfhst:adventurelog-light",
	});
}

export default Component;
