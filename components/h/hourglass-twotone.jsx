import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1k4k4b0q.css';
import '../../css/b/bdgm4mbrh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1k4k4b0q"/><path class="bdgm4mbrh"/>`,
		"fallback": "ant-design:hourglass-twotone",
	});
}

export default Component;
