import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh6eqlk_e.css';
import '../../css/d/dqmh4gbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh6eqlk_e"/><path class="dqmh4gbwi"/>`,
		"fallback": "streamline-ultimate:camera-tripod-bold",
	});
}

export default Component;
