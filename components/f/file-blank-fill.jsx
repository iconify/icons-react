import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtu8q4byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtu8q4byj"/>`,
		"fallback": "ci:file-blank-fill",
	});
}

export default Component;
