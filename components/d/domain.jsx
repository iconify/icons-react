import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awtstmbxd.css';

const viewBox = {"width":1024,"height":999};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awtstmbxd"/>`,
		"fallback": "whh:domain",
	});
}

export default Component;
