import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b98-y_bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b98-y_bqj"/>`,
		"fallback": "tdesign:correct-filled",
	});
}

export default Component;
