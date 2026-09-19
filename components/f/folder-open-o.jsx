import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5-ql04qj.css';

const viewBox = {"width":1920,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5-ql04qj"/>`,
		"fallback": "fa:folder-open-o",
	});
}

export default Component;
