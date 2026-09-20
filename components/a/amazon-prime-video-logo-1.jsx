import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/jqp1fo4my.css';
import '../../css/m/mjyyngdci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="jqp1fo4my"/><path class="mjyyngdci"/></g>`,
		"fallback": "streamline-logos:amazon-prime-video-logo-1",
	});
}

export default Component;
