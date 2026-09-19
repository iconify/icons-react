import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8czg0b6o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8czg0b6o"/>`,
		"fallback": "ant-design:google-outlined",
	});
}

export default Component;
