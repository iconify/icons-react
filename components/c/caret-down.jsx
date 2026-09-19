import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtat75bif.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtat75bif"/>`,
		"fallback": "ant-design:caret-down",
	});
}

export default Component;
