import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7c_ewbfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7c_ewbfk"/>`,
		"fallback": "pajamas:drag",
	});
}

export default Component;
