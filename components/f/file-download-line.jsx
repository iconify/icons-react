import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqm17obfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqm17obfp"/>`,
		"fallback": "mingcute:file-download-line",
	});
}

export default Component;
