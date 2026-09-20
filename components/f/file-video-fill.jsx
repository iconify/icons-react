import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhm_dub_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhm_dub_v"/>`,
		"fallback": "ri:file-video-fill",
	});
}

export default Component;
