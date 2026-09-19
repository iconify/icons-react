import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy42rxa0p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy42rxa0p"/>`,
		"fallback": "fluent-emoji-flat:high-voltage",
	});
}

export default Component;
