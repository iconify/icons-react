import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxjlgk8tw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxjlgk8tw"/>`,
		"fallback": "ix:combine",
	});
}

export default Component;
