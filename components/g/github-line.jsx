import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpyw0o4_q.css';
import '../../css/d/d8af_jbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGmFUv3dVk" class="vpyw0o4_q"/></defs><use href="#SVGmFUv3dVk" class="d8af_jbct"/><use href="#SVGmFUv3dVk" class="d8af_jbct"/>`,
		"fallback": "mingcute:github-line",
	});
}

export default Component;
