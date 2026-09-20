import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz7jn38ey.css';
import '../../css/y/ynkxq5xnv.css';
import '../../css/a/asevnlbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz7jn38ey"/><path class="ynkxq5xnv"/><path class="asevnlbpb"/>`,
		"fallback": "token:ice",
	});
}

export default Component;
