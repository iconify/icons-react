import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw-bguxsi.css';
import '../../css/q/qx1z26mll.css';
import '../../css/e/e907rnzaq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw-bguxsi"/><path class="qx1z26mll"/><path class="e907rnzaq"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-phone-tablet",
	});
}

export default Component;
