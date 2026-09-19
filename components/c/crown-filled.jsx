import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5gcnxb5z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5gcnxb5z"/>`,
		"fallback": "ant-design:crown-filled",
	});
}

export default Component;
