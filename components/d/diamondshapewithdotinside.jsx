import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmh6thbmv.css';
import '../../css/w/wliz8yb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmh6thbmv"/><circle class="wliz8yb9s"/>`,
		"fallback": "fxemoji:diamondshapewithdotinside",
	});
}

export default Component;
