import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjnv0c0fo.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjnv0c0fo"/>`,
		"fallback": "whh:braillew",
	});
}

export default Component;
