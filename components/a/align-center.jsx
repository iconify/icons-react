import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk7f85f6n.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk7f85f6n"/>`,
		"fallback": "fa:align-center",
	});
}

export default Component;
