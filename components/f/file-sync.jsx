import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyi6f9bda.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyi6f9bda"/>`,
		"fallback": "ant-design:file-sync",
	});
}

export default Component;
