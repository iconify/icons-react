import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyl1n9beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyl1n9beq"/>`,
		"fallback": "gg:arrows-expand-left",
	});
}

export default Component;
