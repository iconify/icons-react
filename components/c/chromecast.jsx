import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgt9us2kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgt9us2kc"/>`,
		"fallback": "lineicons:chromecast",
	});
}

export default Component;
