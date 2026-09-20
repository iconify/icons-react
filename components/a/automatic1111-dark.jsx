import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av7qmjbdc.css';
import '../../css/x/xnlpiqbcd.css';
import '../../css/v/vc3m3pbaa.css';
import '../../css/j/jysb2bbxh.css';
import '../../css/q/q75ztzbgi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av7qmjbdc"/><path class="xnlpiqbcd"/><path class="vc3m3pbaa"/><path class="jysb2bbxh"/><path class="q75ztzbgi"/>`,
		"fallback": "selfhst:automatic1111-dark",
	});
}

export default Component;
