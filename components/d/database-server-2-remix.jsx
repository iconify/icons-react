import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brk64sb0o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="brk64sb0o"/>`,
		"fallback": "streamline:database-server-2-remix",
	});
}

export default Component;
