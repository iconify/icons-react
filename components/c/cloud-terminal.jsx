import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh5pojbcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mh5pojbcn"/>`,
		"fallback": "pajamas:cloud-terminal",
	});
}

export default Component;
