import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oev3t-jft.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oev3t-jft"/>`,
		"fallback": "ant-design:fork-outlined",
	});
}

export default Component;
