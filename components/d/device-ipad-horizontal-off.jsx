import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo2s3nbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo2s3nbzt"/>`,
		"fallback": "tabler:device-ipad-horizontal-off",
	});
}

export default Component;
