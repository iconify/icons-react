import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy76qwm9w.css';
import '../../css/e/e19_5uz2d.css';
import '../../css/e/e_qertnto.css';
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
		"content": `<path class="dy76qwm9w"/><path class="e19_5uz2d"/><path class="e_qertnto"/><path class="yquwh0i5s"/><path class="yvgdpzb2e"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-left-1",
	});
}

export default Component;
