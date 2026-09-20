import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as74db1rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as74db1rf"/>`,
		"fallback": "mage:file-plus-fill",
	});
}

export default Component;
