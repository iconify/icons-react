import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_nd-1x5c.css';
import '../../css/x/x6jd1xc0z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_nd-1x5c"/><path class="x6jd1xc0z"/>`,
		"fallback": "energy-icons:connector-type1-20",
	});
}

export default Component;
