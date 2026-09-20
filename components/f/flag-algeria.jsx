import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/k/knur8ibvp.css';
import '../../css/c/cdcnwyb5e.css';
import '../../css/a/akx9uvbtx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="knur8ibvp"/><path class="cdcnwyb5e"/><path class="akx9uvbtx"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-algeria",
	});
}

export default Component;
