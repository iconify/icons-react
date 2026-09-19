import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1o5_0ddl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i1o5_0ddl"/>`,
		"fallback": "griddy-icons:inbox-out-filled",
	});
}

export default Component;
