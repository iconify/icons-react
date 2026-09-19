import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja5incaal.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja5incaal"/>`,
		"fallback": "garden:inbox-fill-12",
	});
}

export default Component;
