import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtdh4fb_d.css';
import '../../css/u/upx6wfzth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtdh4fb_d"/><path class="upx6wfzth"/>`,
		"fallback": "material-icon-theme:cloudfoundry",
	});
}

export default Component;
