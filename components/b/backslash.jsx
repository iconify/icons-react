import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0c_zi20n.css';

const viewBox = {"width":559,"height":854};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0c_zi20n"/>`,
		"fallback": "ls:backslash",
	});
}

export default Component;
