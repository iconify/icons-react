import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yff1h6byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yff1h6byt"/>`,
		"fallback": "hugeicons:add-02",
	});
}

export default Component;
