import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgib-pbei.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgib-pbei"/>`,
		"fallback": "streamline-color:christian-cross-2",
	});
}

export default Component;
