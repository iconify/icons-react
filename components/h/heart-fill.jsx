import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3_je9bau.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3_je9bau"/>`,
		"fallback": "ant-design:heart-fill",
	});
}

export default Component;
