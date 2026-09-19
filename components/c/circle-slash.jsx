import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toh0lpxph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toh0lpxph"/>`,
		"fallback": "codicon:circle-slash",
	});
}

export default Component;
