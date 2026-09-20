import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksw885bgi.css';
import '../../css/y/y9k-0kbbo.css';
import '../../css/b/bjpij3b_x.css';
import '../../css/y/yquwh0i5s.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksw885bgi"/><path class="y9k-0kbbo"/><path class="bjpij3b_x"/><path class="yquwh0i5s"/><path class="yvgdpzb2e"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-left-2",
	});
}

export default Component;
