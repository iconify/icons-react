import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vymljlban.css';
import '../../css/c/c8er-hbku.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vymljlban"/><circle class="c8er-hbku"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-palau",
	});
}

export default Component;
