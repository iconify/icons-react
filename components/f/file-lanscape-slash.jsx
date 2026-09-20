import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvcue3bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvcue3bwl"/>`,
		"fallback": "uil:file-lanscape-slash",
	});
}

export default Component;
