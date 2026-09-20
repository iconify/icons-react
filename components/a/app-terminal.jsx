import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh76tebbp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh76tebbp"/>`,
		"fallback": "temaki:app-terminal",
	});
}

export default Component;
