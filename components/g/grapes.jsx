import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2j_6wewx.css';

const viewBox = {"width":1568,"height":1824};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2j_6wewx"/>`,
		"fallback": "vs:grapes",
	});
}

export default Component;
