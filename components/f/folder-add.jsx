import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol2x7rbre.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol2x7rbre"/>`,
		"fallback": "ant-design:folder-add",
	});
}

export default Component;
