import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihmgd-bza.css';
import '../../css/x/x9845bcgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihmgd-bza"/><path class="x9845bcgi"/>`,
		"fallback": "token:hzn",
	});
}

export default Component;
