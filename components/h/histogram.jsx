import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/w/w94kgrhdl.css';
import '../../css/a/am6of0txh.css';
import '../../css/q/qdc63jnsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="w94kgrhdl"/><path class="am6of0txh"/><path class="qdc63jnsb"/></g>`,
		"fallback": "icon-park:histogram",
	});
}

export default Component;
