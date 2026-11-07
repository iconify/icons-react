import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcid6acgw.css';
import '../../css/y/yt8zcm-qf.css';
import '../../css/j/jait5vasr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcid6acgw"/><path class="yt8zcm-qf"/><path class="jait5vasr"/>`,
		"fallback": "solar:bookmark-square-bold-duotone",
	});
}

export default Component;
