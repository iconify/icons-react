import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk_un1jmk.css';
import '../../css/x/xbxdhwbjf.css';
import '../../css/n/nohjf7qfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="vk_un1jmk"/><path class="xbxdhwbjf"/><path class="nohjf7qfd"/></g>`,
		"fallback": "icon-park:customer",
	});
}

export default Component;
