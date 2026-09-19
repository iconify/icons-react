import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvxdyub1d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvxdyub1d"/>`,
		"fallback": "dashicons:admin-site",
	});
}

export default Component;
