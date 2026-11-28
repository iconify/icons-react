import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paika9b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paika9b4e"/>`,
		"fallback": "noviair:file-heart",
	});
}

export default Component;
