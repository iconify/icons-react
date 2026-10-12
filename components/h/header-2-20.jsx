import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce19mdb_a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce19mdb_a"/>`,
		"fallback": "garden:header-2-20",
	});
}

export default Component;
