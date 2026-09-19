import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_np747ww.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_np747ww"/>`,
		"fallback": "ant-design:code-sandbox-circle-fill",
	});
}

export default Component;
