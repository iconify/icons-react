import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blyr4hb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blyr4hb_l"/>`,
		"fallback": "token:ardr",
	});
}

export default Component;
