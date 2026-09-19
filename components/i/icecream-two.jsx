import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gm_y72bsf.css';
import '../../css/w/w3cr9ab-i.css';
import '../../css/j/juw4_ubej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="gm_y72bsf"/><path class="w3cr9ab-i"/><path class="juw4_ubej"/></g>`,
		"fallback": "icon-park:icecream-two",
	});
}

export default Component;
