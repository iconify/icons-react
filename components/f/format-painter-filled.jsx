import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2e1cyb8d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2e1cyb8d"/>`,
		"fallback": "ant-design:format-painter-filled",
	});
}

export default Component;
