import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdpm3zb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdpm3zb1l"/>`,
		"fallback": "thesvg-color:etcd",
	});
}

export default Component;
