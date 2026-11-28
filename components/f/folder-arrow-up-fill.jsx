import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p37mgybgu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p37mgybgu"/>`,
		"fallback": "pullo:folder-arrow-up-fill",
	});
}

export default Component;
