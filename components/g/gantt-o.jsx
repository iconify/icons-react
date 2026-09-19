import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbd9-edzm.css';

const viewBox = {"width":1920,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbd9-edzm"/>`,
		"fallback": "vs:gantt-o",
	});
}

export default Component;
