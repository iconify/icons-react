import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4jq1x2sk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4jq1x2sk"/>`,
		"fallback": "pinhead:arrow-right-from-left-bracket",
	});
}

export default Component;
