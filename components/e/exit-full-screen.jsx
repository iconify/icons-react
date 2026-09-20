import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/z/zygv4yjok.css';
import '../../css/v/vajc68baa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="zygv4yjok"/><path class="vajc68baa"/></g>`,
		"fallback": "streamline-plump-color:exit-full-screen",
	});
}

export default Component;
