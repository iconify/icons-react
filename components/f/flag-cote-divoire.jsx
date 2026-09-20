import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/bp_qhjl1k.css';
import '../../css/s/sbnun1btu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="bp_qhjl1k"/><path class="sbnun1btu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-cote-divoire",
	});
}

export default Component;
