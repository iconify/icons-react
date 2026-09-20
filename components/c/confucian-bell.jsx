import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgu1jru5y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgu1jru5y"/>`,
		"fallback": "pinhead:confucian-bell",
	});
}

export default Component;
