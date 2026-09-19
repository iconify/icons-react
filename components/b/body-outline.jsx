import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xloalwbzx.css';
import '../../css/m/mmy9fyb8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xloalwbzx"/><path class="mmy9fyb8n"/></g>`,
		"fallback": "healthicons:body-outline",
	});
}

export default Component;
