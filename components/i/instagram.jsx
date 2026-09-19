import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig3-qac5f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig3-qac5f"/>`,
		"fallback": "ant-design:instagram",
	});
}

export default Component;
