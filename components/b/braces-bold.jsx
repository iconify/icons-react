import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7lt-t-fe.css';
import '../../css/b/b-rzfvbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7lt-t-fe"/><path class="b-rzfvbah"/>`,
		"fallback": "solar:braces-bold",
	});
}

export default Component;
