import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn91b5qub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn91b5qub"/>`,
		"fallback": "coolicons:carrot-fill-round",
	});
}

export default Component;
