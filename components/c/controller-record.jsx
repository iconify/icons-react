import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm7he-b0p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm7he-b0p"/>`,
		"fallback": "entypo:controller-record",
	});
}

export default Component;
