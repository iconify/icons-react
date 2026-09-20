import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6-kdbmf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6-kdbmf"/>`,
		"fallback": "picon:dolly",
	});
}

export default Component;
