import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo6ozabgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo6ozabgb"/>`,
		"fallback": "octicon:graph",
	});
}

export default Component;
