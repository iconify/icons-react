import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbtsfbb8w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbtsfbb8w"/>`,
		"fallback": "picon:files",
	});
}

export default Component;
