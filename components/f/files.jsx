import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbt9mqbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbt9mqbzt"/>`,
		"fallback": "ci:files",
	});
}

export default Component;
