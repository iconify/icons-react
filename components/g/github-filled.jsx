import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syfef3t7l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syfef3t7l"/>`,
		"fallback": "ant-design:github-filled",
	});
}

export default Component;
