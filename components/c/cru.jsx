import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7tplmbgr.css';
import '../../css/j/jj8ei-gdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7tplmbgr"/><path class="jj8ei-gdy"/>`,
		"fallback": "token:cru",
	});
}

export default Component;
