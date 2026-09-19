import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4f4nn3zt.css';
import '../../css/c/c25131bar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4f4nn3zt"/><path class="c25131bar"/>`,
		"fallback": "garden:check-box-double-fill-16",
	});
}

export default Component;
