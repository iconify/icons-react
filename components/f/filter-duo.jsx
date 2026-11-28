import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbz91zb-u.css';
import '../../css/x/xai2kcsad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbz91zb-u secondary"/><path class="primary xai2kcsad"/>`,
		"fallback": "iconaut:filter-duo",
	});
}

export default Component;
