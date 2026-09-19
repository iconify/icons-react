import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okk6ekkxa.css';

const viewBox = {"width":1408,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okk6ekkxa"/>`,
		"fallback": "fa:ellipsis-h",
	});
}

export default Component;
