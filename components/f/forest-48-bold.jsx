import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wavel16di.css';
import '../../css/c/c07p4-7-o.css';
import '../../css/k/kzltt2bms.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wavel16di"/><path class="c07p4-7-o"/><path class="kzltt2bms"/><path class="d6cvwtbsp"/>`,
		"fallback": "energy-icons:forest-48-bold",
	});
}

export default Component;
