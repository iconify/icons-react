import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7texh2rn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7texh2rn"/>`,
		"fallback": "whh:circlec",
	});
}

export default Component;
