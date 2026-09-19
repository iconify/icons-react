import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef6n7ybih.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef6n7ybih"/>`,
		"fallback": "devicon:faunadb-wordmark",
	});
}

export default Component;
