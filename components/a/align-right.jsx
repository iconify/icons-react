import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an839bbvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an839bbvr"/>`,
		"fallback": "nimbus:align-right",
	});
}

export default Component;
