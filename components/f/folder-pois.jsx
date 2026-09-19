import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9b_kub7q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9b_kub7q"/>`,
		"fallback": "gis:folder-pois",
	});
}

export default Component;
