import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhxhmzp8y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhxhmzp8y"/>`,
		"fallback": "ant-design:frown-filled",
	});
}

export default Component;
