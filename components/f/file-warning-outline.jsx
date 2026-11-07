import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5sw_jabn.css';
import '../../css/y/yrd2shbbf.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5sw_jabn"/><path class="yrd2shbbf"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-warning-outline",
	});
}

export default Component;
