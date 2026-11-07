import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gswtq35or.css';
import '../../css/h/hosmgacxy.css';
import '../../css/u/ugpo-abdx.css';
import '../../css/y/ybm4f5bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gswtq35or"/><path class="hosmgacxy"/><path class="ugpo-abdx"/><path class="ybm4f5bzb"/>`,
		"fallback": "solar:home-wi-fi-angle-bold-duotone",
	});
}

export default Component;
