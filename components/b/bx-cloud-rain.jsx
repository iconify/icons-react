import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-yt7ibsl.css';
import '../../css/m/mfa8tygij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-yt7ibsl"/><path class="mfa8tygij"/>`,
		"fallback": "bx:bx-cloud-rain",
	});
}

export default Component;
