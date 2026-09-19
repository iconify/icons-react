import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj5-1lbtq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj5-1lbtq"/>`,
		"fallback": "ant-design:bars-outline",
	});
}

export default Component;
