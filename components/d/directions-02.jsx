import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_60j9k2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_60j9k2m"/>`,
		"fallback": "hugeicons:directions-02",
	});
}

export default Component;
