import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq6f6bcoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq6f6bcoa"/>`,
		"fallback": "mdi:asterisk",
	});
}

export default Component;
