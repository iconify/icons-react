import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imj74x0ga.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imj74x0ga"/>`,
		"fallback": "ant-design:diff-outlined",
	});
}

export default Component;
