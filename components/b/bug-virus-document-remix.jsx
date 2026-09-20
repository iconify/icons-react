import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo2007t4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uo2007t4w"/>`,
		"fallback": "streamline:bug-virus-document-remix",
	});
}

export default Component;
