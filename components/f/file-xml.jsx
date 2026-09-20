import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6cg2ob2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6cg2ob2d"/>`,
		"fallback": "mdi:file-xml",
	});
}

export default Component;
