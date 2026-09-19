import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m64gr6bih.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m64gr6bih"/>`,
		"fallback": "ant-design:box-plot-outline",
	});
}

export default Component;
