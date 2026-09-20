import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv_7cr1qr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gv_7cr1qr"/>`,
		"fallback": "lsicon:incubator-filled",
	});
}

export default Component;
