import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj81zpj-r.css';
import '../../css/n/nm_4mya7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj81zpj-r"/><path class="nm_4mya7e"/>`,
		"fallback": "boxicons:balloon",
	});
}

export default Component;
