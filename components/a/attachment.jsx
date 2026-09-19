import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knp3hqltq.css';

const viewBox = {"width":456,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knp3hqltq"/>`,
		"fallback": "ps:attachment",
	});
}

export default Component;
