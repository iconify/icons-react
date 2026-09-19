import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-v0e9b4r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-v0e9b4r"/>`,
		"fallback": "dinkie-icons:alipay-filled",
	});
}

export default Component;
