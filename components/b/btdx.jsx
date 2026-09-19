import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5eou4ady.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5eou4ady"/>`,
		"fallback": "cryptocurrency:btdx",
	});
}

export default Component;
