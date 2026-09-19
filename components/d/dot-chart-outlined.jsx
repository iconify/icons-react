import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4fyvha9i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4fyvha9i"/>`,
		"fallback": "ant-design:dot-chart-outlined",
	});
}

export default Component;
