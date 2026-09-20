import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/i/invu3qyef.css';
import '../../css/b/bzun-yi8p.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="invu3qyef"/><path class="bzun-yi8p"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-belgium",
	});
}

export default Component;
