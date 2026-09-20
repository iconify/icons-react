import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkca99b1w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bkca99b1w"/>`,
		"fallback": "streamline-flex:dice-5-solid",
	});
}

export default Component;
