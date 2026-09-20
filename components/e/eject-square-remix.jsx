import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv18bcc6x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sv18bcc6x"/>`,
		"fallback": "streamline-flex:eject-square-remix",
	});
}

export default Component;
