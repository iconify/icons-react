import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/asgddbclx.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/e/ec_xsy4gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="asgddbclx"/><circle class="bf9hqaclw"/><circle class="ec_xsy4gs"/></g>`,
		"fallback": "hugeicons:ambulance",
	});
}

export default Component;
