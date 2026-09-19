import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3ooak9tu.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3ooak9tu"/>`,
		"fallback": "fa:buysellads",
	});
}

export default Component;
