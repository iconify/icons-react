import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/x/xv_qezitw.css';
import '../../css/g/gqwnljrcu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="xv_qezitw"/><path class="gqwnljrcu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-canada",
	});
}

export default Component;
