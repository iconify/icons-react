import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgmsu_7-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgmsu_7-o"/>`,
		"fallback": "uit:download-alt",
	});
}

export default Component;
