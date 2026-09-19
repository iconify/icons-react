import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/ggg2z8w3r.css';
import '../../css/a/am7huy7gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ggg2z8w3r"/><path class="am7huy7gk"/></g>`,
		"fallback": "iconamoon:badge-bold",
	});
}

export default Component;
