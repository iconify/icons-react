import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgbc1gbzz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgbc1gbzz"/>`,
		"fallback": "dinkie-icons:alipay",
	});
}

export default Component;
