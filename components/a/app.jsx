import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxxg56hwm.css';

const viewBox = {"width":768,"height":731};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxxg56hwm"/>`,
		"fallback": "ls:app",
	});
}

export default Component;
