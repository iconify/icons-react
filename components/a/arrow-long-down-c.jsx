import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd6xqxmrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jd6xqxmrv"/>`,
		"fallback": "gg:arrow-long-down-c",
	});
}

export default Component;
