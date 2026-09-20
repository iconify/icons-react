import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm9g3ydmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm9g3ydmj"/>`,
		"fallback": "octicon:accessibility-inset-24",
	});
}

export default Component;
