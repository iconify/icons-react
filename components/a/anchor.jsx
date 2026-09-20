import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s41z9kb0q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s41z9kb0q"/>`,
		"fallback": "simple-line-icons:anchor",
	});
}

export default Component;
