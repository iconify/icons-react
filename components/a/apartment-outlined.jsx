import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd4pmb2eb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd4pmb2eb"/>`,
		"fallback": "ant-design:apartment-outlined",
	});
}

export default Component;
