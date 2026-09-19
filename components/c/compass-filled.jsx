import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed85gr18x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed85gr18x"/>`,
		"fallback": "ant-design:compass-filled",
	});
}

export default Component;
