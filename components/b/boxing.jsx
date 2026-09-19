import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b27i78bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b27i78bjr"/>`,
		"fallback": "guidance:boxing",
	});
}

export default Component;
