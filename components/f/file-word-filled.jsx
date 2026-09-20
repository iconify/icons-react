import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp5hn5bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp5hn5bqu"/>`,
		"fallback": "tdesign:file-word-filled",
	});
}

export default Component;
