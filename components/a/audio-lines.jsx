import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk8cd_zmb.css';
import '../../css/s/stgarl9zm.css';
import '../../css/h/hd_apab9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk8cd_zmb wm-a"/><path class="stgarl9zm wm-k"/><path class="hd_apab9n wm-k"/>`,
		"fallback": "withicons-bauhaus:audio-lines",
	});
}

export default Component;
