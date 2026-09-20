import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vkd5hjbyt.css';
import '../../css/x/xmsl8rfmo.css';
import '../../css/e/e8uc85bqm.css';
import '../../css/m/mr8upu4-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="vkd5hjbyt"/><path class="xmsl8rfmo"/><path class="e8uc85bqm"/><path class="mr8upu4-h"/></g>`,
		"fallback": "streamline-plump-color:cyborg-2",
	});
}

export default Component;
