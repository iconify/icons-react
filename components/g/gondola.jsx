import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfg2ff-7t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfg2ff-7t"/>`,
		"fallback": "picon:gondola",
	});
}

export default Component;
