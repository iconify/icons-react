import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcwudk0gy.css';
import '../../css/s/sn54l82wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcwudk0gy"/><path class="sn54l82wk"/>`,
		"fallback": "lineicons:go",
	});
}

export default Component;
