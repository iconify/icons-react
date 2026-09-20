import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_htoib7j.css';
import '../../css/n/n98d9ccwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_htoib7j"/><path class="n98d9ccwb"/>`,
		"fallback": "streamline-ultimate:file-c-plus-plus-bold",
	});
}

export default Component;
