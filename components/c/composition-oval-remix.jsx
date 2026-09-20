import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb0xdf74c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb0xdf74c"/>`,
		"fallback": "streamline:composition-oval-remix",
	});
}

export default Component;
