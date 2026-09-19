import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx0jmzb5v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx0jmzb5v"/>`,
		"fallback": "carbon:devices-apps",
	});
}

export default Component;
