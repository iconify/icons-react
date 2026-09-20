import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn896ebbl.css';

const viewBox = {"width":201,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn896ebbl"/>`,
		"fallback": "material-icon-theme:imba",
	});
}

export default Component;
