import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k72q-yb3f.css';
import '../../css/d/dd34srmzm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k72q-yb3f"/><path class="dd34srmzm"/>`,
		"fallback": "cil:golf-alt",
	});
}

export default Component;
