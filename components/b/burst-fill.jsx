import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imxnydpyr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imxnydpyr"/>`,
		"fallback": "f7:burst-fill",
	});
}

export default Component;
