import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njc-z_btr.css';
import '../../css/k/kiohhd3cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njc-z_btr"/><path clip-rule="evenodd" class="kiohhd3cn"/>`,
		"fallback": "si:assignment-fill",
	});
}

export default Component;
