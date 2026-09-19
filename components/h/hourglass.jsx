import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjaivij0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjaivij0o"/>`,
		"fallback": "griddy-icons:hourglass",
	});
}

export default Component;
