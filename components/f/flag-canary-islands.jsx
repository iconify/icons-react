import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqa97brp.css';
import '../../css/t/tsvbfvbzz.css';
import '../../css/i/i-85-zf4z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqa97brp"/><path class="tsvbfvbzz"/><path class="i-85-zf4z"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-canary-islands",
	});
}

export default Component;
