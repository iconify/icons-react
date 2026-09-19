import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fid8v8bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fid8v8bxe"/>`,
		"fallback": "ci:html5",
	});
}

export default Component;
