import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz71yshvb.css';
import '../../css/k/k9--tbbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz71yshvb"/><path class="k9--tbbhz"/>`,
		"fallback": "streamline-ultimate:alipay-logo-bold",
	});
}

export default Component;
