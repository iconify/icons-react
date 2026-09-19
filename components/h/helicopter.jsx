import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8b-1acnu.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8b-1acnu"/>`,
		"fallback": "whh:helicopter",
	});
}

export default Component;
