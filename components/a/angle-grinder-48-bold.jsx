import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1sv60b0b.css';
import '../../css/j/jls6yjbxr.css';
import '../../css/j/j_dws6b2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1sv60b0b"/><path class="jls6yjbxr"/><path class="j_dws6b2p"/>`,
		"fallback": "energy-icons:angle-grinder-48-bold",
	});
}

export default Component;
