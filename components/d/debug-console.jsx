import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b616_6bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b616_6bxk"/>`,
		"fallback": "codicon:debug-console",
	});
}

export default Component;
