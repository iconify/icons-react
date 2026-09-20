import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqt9i-bxr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqt9i-bxr"/>`,
		"fallback": "pinhead:arrow-down-to-down-bracket",
	});
}

export default Component;
