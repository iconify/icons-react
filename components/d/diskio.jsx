import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r57brub0x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r57brub0x"/>`,
		"fallback": "fad:diskio",
	});
}

export default Component;
