import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq-4co-2o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq-4co-2o"/>`,
		"fallback": "ant-design:amazon-outline",
	});
}

export default Component;
