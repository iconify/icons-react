import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbyzct5is.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbyzct5is"/>`,
		"fallback": "whh:day",
	});
}

export default Component;
