import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/j/jrsmtbc7d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><rect transform="rotate(30 40 38)" class="jrsmtbc7d"/><rect transform="rotate(-30 31 36)" class="jrsmtbc7d"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:alabama-flag",
	});
}

export default Component;
