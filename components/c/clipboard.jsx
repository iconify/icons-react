import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl2mnppab.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl2mnppab"/>`,
		"fallback": "vs:clipboard",
	});
}

export default Component;
