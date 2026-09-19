import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqtw05bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqtw05bit"/>`,
		"fallback": "gg:edit-unmask",
	});
}

export default Component;
