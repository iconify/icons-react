import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-vp4jbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-vp4jbjl"/>`,
		"fallback": "qlementine-icons:file-pdf-24",
	});
}

export default Component;
