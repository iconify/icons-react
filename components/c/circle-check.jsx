import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgurgoa2f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgurgoa2f"/>`,
		"fallback": "fa7-regular:circle-check",
	});
}

export default Component;
