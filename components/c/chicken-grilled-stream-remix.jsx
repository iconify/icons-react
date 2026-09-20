import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6vtb6xsl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w6vtb6xsl"/>`,
		"fallback": "streamline:chicken-grilled-stream-remix",
	});
}

export default Component;
