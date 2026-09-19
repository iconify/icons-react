import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzny27bve.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzny27bve"/>`,
		"fallback": "ant-design:file-pdf-outline",
	});
}

export default Component;
