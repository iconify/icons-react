import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayrbz2i7q.css';
import '../../css/s/s99lf0bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayrbz2i7q"/><path class="s99lf0bbc"/>`,
		"fallback": "mingcute:indent-decrease-fill",
	});
}

export default Component;
