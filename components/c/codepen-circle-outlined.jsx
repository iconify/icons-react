import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khnbt5byk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khnbt5byk"/>`,
		"fallback": "ant-design:codepen-circle-outlined",
	});
}

export default Component;
