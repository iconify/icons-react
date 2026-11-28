import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvv330bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvv330bbm"/>`,
		"fallback": "noviair:calculator-check",
	});
}

export default Component;
