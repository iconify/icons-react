import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnjq5zbqb.css';
import '../../css/f/f7q3gxb0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnjq5zbqb"/><path class="f7q3gxb0j"/>`,
		"fallback": "energy-icons:connector-mcs-20",
	});
}

export default Component;
