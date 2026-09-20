import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6o98sb4c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6o98sb4c"/>`,
		"fallback": "picon:chart",
	});
}

export default Component;
