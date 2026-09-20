import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjrm-7bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjrm-7bqs"/>`,
		"fallback": "tdesign:expand-up-filled",
	});
}

export default Component;
