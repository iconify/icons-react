import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_i561bpd.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_i561bpd"/>`,
		"fallback": "garden:file-26",
	});
}

export default Component;
