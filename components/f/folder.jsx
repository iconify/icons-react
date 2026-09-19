import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2mnc1cer.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2mnc1cer"/>`,
		"fallback": "fa7-solid:folder",
	});
}

export default Component;
