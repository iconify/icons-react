import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd583-bof.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd583-bof"/>`,
		"fallback": "fa:file-text-o",
	});
}

export default Component;
