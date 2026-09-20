import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/p/pak7skb-u.css';
import '../../css/p/po--u8bty.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="pak7skb-u"/><path class="po--u8bty"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-cyprus",
	});
}

export default Component;
