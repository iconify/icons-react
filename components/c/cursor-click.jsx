import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytzi4p-xu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytzi4p-xu"/>`,
		"fallback": "streamline-flex:cursor-click",
	});
}

export default Component;
