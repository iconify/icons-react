import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmozsvb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmozsvb8a"/>`,
		"fallback": "ri:file-unknow-line",
	});
}

export default Component;
