import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m27qgfj9v.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m27qgfj9v"/>`,
		"fallback": "octicon:clock",
	});
}

export default Component;
