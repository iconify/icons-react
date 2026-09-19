import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjg90-bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wjg90-bbu"/>`,
		"fallback": "gg:arrow-long-right-r",
	});
}

export default Component;
