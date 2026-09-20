import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4zwn-thk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4zwn-thk"/>`,
		"fallback": "streamline-flex:bell",
	});
}

export default Component;
