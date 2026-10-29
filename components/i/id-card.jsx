import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx66pva8x.css';
import '../../css/z/z0pbxopjv.css';
import '../../css/n/ntgg6relj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx66pva8x wm-k"/><path class="wm-a z0pbxopjv"/><path class="ntgg6relj wm-a"/>`,
		"fallback": "withicons-bauhaus:id-card",
	});
}

export default Component;
