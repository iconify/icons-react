import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/matj_mbse.css';
import '../../css/s/su639bbye.css';
import '../../css/f/f498sebzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="matj_mbse"/><path class="su639bbye"/><path class="f498sebzm"/>`,
		"fallback": "gcp:configuration-management",
	});
}

export default Component;
