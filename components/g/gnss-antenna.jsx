import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfgrkdb5o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfgrkdb5o"/>`,
		"fallback": "gis:gnss-antenna",
	});
}

export default Component;
