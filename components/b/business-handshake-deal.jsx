import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/i/ii-ao702o.css';
import '../../css/y/yx66z0zyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ii-ao702o"/><path class="yx66z0zyv"/></g>`,
		"fallback": "streamline-cyber:business-handshake-deal",
	});
}

export default Component;
