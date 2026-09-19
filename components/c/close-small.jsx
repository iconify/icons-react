import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dkf14nbee.css';
import '../../css/z/zqop0k_zy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dkf14nbee"/><path class="zqop0k_zy"/></g>`,
		"fallback": "icon-park:close-small",
	});
}

export default Component;
