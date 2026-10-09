import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6mc35b_l.css';
import '../../css/o/ofxcalb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6mc35b_l"/><path class="ofxcalb1g"/>`,
		"fallback": "energy-icons:bonfire-48-bold",
	});
}

export default Component;
