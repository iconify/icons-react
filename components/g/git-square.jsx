import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoxidbb6o.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoxidbb6o"/>`,
		"fallback": "fa:git-square",
	});
}

export default Component;
