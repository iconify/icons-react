import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eud5tvbvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eud5tvbvc"/>`,
		"fallback": "streamline:align-left-1-remix",
	});
}

export default Component;
