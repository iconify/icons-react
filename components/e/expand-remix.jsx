import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv9cmca5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sv9cmca5x"/>`,
		"fallback": "streamline:expand-remix",
	});
}

export default Component;
