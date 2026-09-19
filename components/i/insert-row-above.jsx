import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g596w6bde.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g596w6bde"/>`,
		"fallback": "ant-design:insert-row-above",
	});
}

export default Component;
