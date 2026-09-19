import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h31609_ls.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h31609_ls"/>`,
		"fallback": "gis:bbox-alt",
	});
}

export default Component;
