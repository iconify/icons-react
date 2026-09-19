import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf7od_ncm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf7od_ncm"/>`,
		"fallback": "dashicons:image-flip-vertical",
	});
}

export default Component;
