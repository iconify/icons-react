import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzo9ji19h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzo9ji19h"/>`,
		"fallback": "streamline-flex:incognito-mode-solid",
	});
}

export default Component;
