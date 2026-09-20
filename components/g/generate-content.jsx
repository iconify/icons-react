import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5ef9db-k.css';
import '../../css/o/odnck4blw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5ef9db-k"/><path class="odnck4blw"/>`,
		"fallback": "oui:generate-content",
	});
}

export default Component;
