import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr8knnbxa.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr8knnbxa"/>`,
		"fallback": "fa6-brands:creative-commons-pd",
	});
}

export default Component;
