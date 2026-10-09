import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka7oo7zjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka7oo7zjg"/>`,
		"fallback": "energy-icons:code-2-20",
	});
}

export default Component;
