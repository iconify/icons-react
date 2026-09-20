import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h134tzmmn.css';
import '../../css/d/dwpr0mcby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h134tzmmn"/><path class="dwpr0mcby"/>`,
		"fallback": "ix:data-type-string-list",
	});
}

export default Component;
