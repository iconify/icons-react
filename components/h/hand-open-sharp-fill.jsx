import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jge1isbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jge1isbqy"/>`,
		"fallback": "keyline-icons:hand-open-sharp-fill",
	});
}

export default Component;
