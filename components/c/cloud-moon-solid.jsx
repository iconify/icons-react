import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaknrpb1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaknrpb1p"/>`,
		"fallback": "la:cloud-moon-solid",
	});
}

export default Component;
