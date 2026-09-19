import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7i6rmbcc.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7i6rmbcc"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:chevron-right-square",
	});
}

export default Component;
