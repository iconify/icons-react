import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk7bhvf1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk7bhvf1l"/>`,
		"fallback": "mdi:google-hangouts",
	});
}

export default Component;
