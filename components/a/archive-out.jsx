import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwj-tdbmb.css';
import '../../css/x/xcy8lybpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwj-tdbmb"/><path class="xcy8lybpd"/>`,
		"fallback": "bx:archive-out",
	});
}

export default Component;
