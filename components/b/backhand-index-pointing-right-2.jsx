import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5xm4351d.css';
import '../../css/y/ywvv8vm-y.css';
import '../../css/x/x0z7g8k7v.css';
import '../../css/y/y6lequ7jv.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5xm4351d"/><path class="ywvv8vm-y"/><path class="x0z7g8k7v"/><path class="y6lequ7jv"/><path class="yvgdpzb2e"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-right-2",
	});
}

export default Component;
