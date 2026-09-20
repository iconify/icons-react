import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbpvrr49a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbpvrr49a"/>`,
		"fallback": "ix:indicator-filled",
	});
}

export default Component;
