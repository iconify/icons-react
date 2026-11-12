import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmut65bkr.css';
import '../../css/i/idc7-cb9a.css';
import '../../css/r/rp7oy-b8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmut65bkr"/><path class="idc7-cb9a"/><path class="rp7oy-b8j"/>`,
		"fallback": "selfhst:finn-light",
	});
}

export default Component;
