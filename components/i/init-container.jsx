import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5tcmf-xm.css';
import '../../css/w/wo40o9c3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5tcmf-xm"/><path class="wo40o9c3e"/>`,
		"fallback": "eos-icons:init-container",
	});
}

export default Component;
