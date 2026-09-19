import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmojuv_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmojuv_0o"/>`,
		"fallback": "hugeicons:asterisk-02",
	});
}

export default Component;
