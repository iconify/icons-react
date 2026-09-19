import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0vm4nbxb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0vm4nbxb"/>`,
		"fallback": "whh:circlerecordempty",
	});
}

export default Component;
