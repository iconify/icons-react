import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9v7t8xls.css';
import '../../css/o/os0e1fbdn.css';

const viewBox = {"width":512,"height":213};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9v7t8xls"/><path class="os0e1fbdn"/>`,
		"fallback": "thesvg-color:ember",
	});
}

export default Component;
