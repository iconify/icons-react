import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyei_3bio.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyei_3bio"/>`,
		"fallback": "vs:f055",
	});
}

export default Component;
