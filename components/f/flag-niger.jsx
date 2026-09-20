import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/k/kgwew5b_w.css';
import '../../css/n/n7zdmgmpe.css';
import '../../css/m/mv8qgobck.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><circle class="kgwew5b_w"/><path class="n7zdmgmpe"/><path class="mv8qgobck"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-niger",
	});
}

export default Component;
