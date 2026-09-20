import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm5u53bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm5u53bzt"/>`,
		"fallback": "keyline-icons:app-window-2-sharp-fill",
	});
}

export default Component;
