import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvntz0b2k.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvntz0b2k"/>`,
		"fallback": "memory:arrow-bottom-left",
	});
}

export default Component;
