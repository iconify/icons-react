import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmor8qrze.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmor8qrze"/>`,
		"fallback": "ant-design:gold-outlined",
	});
}

export default Component;
