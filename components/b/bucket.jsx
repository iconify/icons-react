import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twdnh2b7x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twdnh2b7x"/>`,
		"fallback": "bi:bucket",
	});
}

export default Component;
