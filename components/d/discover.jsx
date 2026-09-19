import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk-_s_bcd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk-_s_bcd"/>`,
		"fallback": "cib:discover",
	});
}

export default Component;
