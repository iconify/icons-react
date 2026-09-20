import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb5fwjseb.css';
import '../../css/x/xpcye44-n.css';
import '../../css/k/kcxdw0blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb5fwjseb"/><path class="xpcye44-n"/><path clip-rule="evenodd" class="kcxdw0blf"/>`,
		"fallback": "token:domi",
	});
}

export default Component;
