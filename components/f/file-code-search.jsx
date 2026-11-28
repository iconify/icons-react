import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3h0-u43f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3h0-u43f"/>`,
		"fallback": "noviair:file-code-search",
	});
}

export default Component;
