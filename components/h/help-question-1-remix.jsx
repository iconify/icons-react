import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kci8ccoim.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kci8ccoim"/>`,
		"fallback": "streamline:help-question-1-remix",
	});
}

export default Component;
