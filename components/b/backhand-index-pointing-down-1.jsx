import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn1q_6bnm.css';
import '../../css/y/ykjfk6v1j.css';
import '../../css/y/y1om2457k.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn1q_6bnm"/><path class="ykjfk6v1j"/><path class="y1om2457k"/><path class="uymgdabjo"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-down-1",
	});
}

export default Component;
