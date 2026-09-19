import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_v3zxy6v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_v3zxy6v"/>`,
		"fallback": "ant-design:copyright-circle-filled",
	});
}

export default Component;
