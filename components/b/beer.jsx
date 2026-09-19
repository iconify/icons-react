import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6fsyy90t.css';

const viewBox = {"width":1600,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6fsyy90t"/>`,
		"fallback": "fa:beer",
	});
}

export default Component;
