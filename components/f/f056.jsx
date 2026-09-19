import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2-zhbbbv.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2-zhbbbv"/>`,
		"fallback": "vs:f056",
	});
}

export default Component;
