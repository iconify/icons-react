import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6hwt2o8x.css';

const viewBox = {"width":115.333,"height":114};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6hwt2o8x"/>`,
		"fallback": "thesvg-color:alertmanager",
	});
}

export default Component;
