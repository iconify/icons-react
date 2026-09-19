import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/q/qh30l5o3m.css';
import '../../css/f/fblylw2ot.css';
import '../../css/x/xlcp1d9yz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8vAabeZN"><g class="wqznn1ydc"><path class="qh30l5o3m"/><path class="fblylw2ot"/><path class="xlcp1d9yz"/></g></mask></defs><path mask="url(#SVG8vAabeZN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hockey",
	});
}

export default Component;
