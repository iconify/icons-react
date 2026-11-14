import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztd9aub4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztd9aub4q"/>`,
		"fallback": "hugeicons:call-disabled-02",
	});
}

export default Component;
