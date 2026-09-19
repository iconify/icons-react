import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiu6qlb0e.css';

const viewBox = {"width":413,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiu6qlb0e"/>`,
		"fallback": "file-icons:flow",
	});
}

export default Component;
