import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g8e4yhbtr.css';
import '../../css/r/rqxp98bpz.css';
import '../../css/c/cvayz8bbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="g8e4yhbtr"/><rect class="rqxp98bpz"/><path class="cvayz8bbi"/></g>`,
		"fallback": "icon-park:hamburger",
	});
}

export default Component;
