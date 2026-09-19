import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjrotzbpr.css';
import '../../css/w/wgckvftty.css';
import '../../css/w/wh72mu7bx.css';
import '../../css/d/db6ijebmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="vjrotzbpr"/><rect class="wgckvftty"/><rect class="wh72mu7bx"/><rect class="db6ijebmx"/>`,
		"fallback": "boxicons:columns-4-filled",
	});
}

export default Component;
