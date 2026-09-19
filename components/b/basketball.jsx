import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn3ror_qv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn3ror_qv"/>`,
		"fallback": "ep:basketball",
	});
}

export default Component;
