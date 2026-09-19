import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i_v32wbmb.css';
import '../../css/r/rd65jodhm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="i_v32wbmb"/><path class="rd65jodhm"/></g>`,
		"fallback": "icon-park:cc",
	});
}

export default Component;
