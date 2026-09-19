import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swhrr-0bj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swhrr-0bj"/>`,
		"fallback": "ant-design:file-fill",
	});
}

export default Component;
