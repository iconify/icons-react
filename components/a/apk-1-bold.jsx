import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uma6umd4x.css';
import '../../css/u/ua-paobrh.css';
import '../../css/x/xe0_hsbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uma6umd4x"/><path class="ua-paobrh"/><path class="xe0_hsbxp"/>`,
		"fallback": "streamline-ultimate:apk-1-bold",
	});
}

export default Component;
