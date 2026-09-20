import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwmlxiynb.css';
import '../../css/j/jdfmcfbkc.css';
import '../../css/y/yy8aoacbq.css';
import '../../css/e/efnborbkf.css';
import '../../css/f/feuxlfrmn.css';
import '../../css/d/deicl5brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwmlxiynb"/><path clip-rule="evenodd" class="jdfmcfbkc"/><path class="yy8aoacbq"/><path class="efnborbkf"/><path class="feuxlfrmn"/><path clip-rule="evenodd" class="deicl5brl"/>`,
		"fallback": "token:fida",
	});
}

export default Component;
