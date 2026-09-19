import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp3507b3q.css';
import '../../css/m/mef_eabep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp3507b3q"/><path class="mef_eabep"/>`,
		"fallback": "bx:building-house",
	});
}

export default Component;
