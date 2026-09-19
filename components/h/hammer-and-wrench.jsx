import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp2chbbkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp2chbbkj"/>`,
		"fallback": "fluent-emoji-high-contrast:hammer-and-wrench",
	});
}

export default Component;
