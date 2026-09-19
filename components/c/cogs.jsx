import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b89_mpbqn.css';

const viewBox = {"width":1920,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b89_mpbqn"/>`,
		"fallback": "fa:cogs",
	});
}

export default Component;
