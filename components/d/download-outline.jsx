import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocod4qb4r.css';
import '../../css/x/xyfijqb0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocod4qb4r"/><path class="xyfijqb0l"/>`,
		"fallback": "famicons:download-outline",
	});
}

export default Component;
