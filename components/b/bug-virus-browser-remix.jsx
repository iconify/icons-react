import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9ibsvb7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9ibsvb7o"/>`,
		"fallback": "streamline-plump:bug-virus-browser-remix",
	});
}

export default Component;
