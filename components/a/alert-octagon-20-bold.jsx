import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0q12sb0a.css';
import '../../css/r/r4qnuebsn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0q12sb0a"/><path class="r4qnuebsn"/>`,
		"fallback": "energy-icons:alert-octagon-20-bold",
	});
}

export default Component;
