import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7-h_b7c.css';
import '../../css/f/foho-ybuk.css';
import '../../css/q/qhzy0fbdy.css';
import '../../css/v/v3g7wfbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li7-h_b7c"/><path class="foho-ybuk"/><path class="qhzy0fbdy"/><path class="v3g7wfbus"/>`,
		"fallback": "solar:bag-2-bold-duotone",
	});
}

export default Component;
