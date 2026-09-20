import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/x/xfqw0ccwv.css';
import '../../css/b/blnj68bzt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="xfqw0ccwv"/><path class="blnj68bzt"/></g>`,
		"fallback": "streamline-flex-color:fahrenheit",
	});
}

export default Component;
