import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx8ai4b8y.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx8ai4b8y"/>`,
		"fallback": "memory:box-outer-light-left-right-stipple",
	});
}

export default Component;
