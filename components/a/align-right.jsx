import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdue1gb9i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdue1gb9i"/>`,
		"fallback": "ant-design:align-right",
	});
}

export default Component;
