import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tagpg-bsk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tagpg-bsk"/>`,
		"fallback": "ep:d-arrow-right",
	});
}

export default Component;
