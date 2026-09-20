import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/z/zgt54ob8c.css';
import '../../css/z/zhhqz1bte.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="zgt54ob8c"/><path class="zhhqz1bte"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-bahamas",
	});
}

export default Component;
