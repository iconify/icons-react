import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgkztrb3w.css';
import '../../css/z/ze7mxibna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgkztrb3w"/><path class="ze7mxibna"/>`,
		"fallback": "boxicons:file-search",
	});
}

export default Component;
