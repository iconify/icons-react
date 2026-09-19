import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m_vk58bve.css';
import '../../css/m/m_9bs70wo.css';
import '../../css/z/zjedaobvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="m_vk58bve"/><path class="m_9bs70wo"/><path class="zjedaobvf"/></g>`,
		"fallback": "icon-park:camera-four",
	});
}

export default Component;
