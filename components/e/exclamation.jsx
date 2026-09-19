import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iby7qcc7d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iby7qcc7d"/>`,
		"fallback": "ant-design:exclamation",
	});
}

export default Component;
