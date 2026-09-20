import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt_4_ts2l.css';
import '../../css/o/oak52ubup.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt_4_ts2l"/><path class="oak52ubup"/>`,
		"fallback": "streamline-pixel:email-mailbox-close",
	});
}

export default Component;
