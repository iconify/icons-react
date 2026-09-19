import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe0cwd_yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe0cwd_yc"/>`,
		"fallback": "iconamoon:arrow-left-2",
	});
}

export default Component;
