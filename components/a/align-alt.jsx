import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyqo3cbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyqo3cbwh"/>`,
		"fallback": "uit:align-alt",
	});
}

export default Component;
