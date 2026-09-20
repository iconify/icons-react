import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv2wyhb0x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv2wyhb0x"/>`,
		"fallback": "pinhead:digital-totem-with-info-i",
	});
}

export default Component;
