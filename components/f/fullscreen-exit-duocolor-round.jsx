import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzvr2u07d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzvr2u07d"/>`,
		"fallback": "coolicons:fullscreen-exit-duocolor-round",
	});
}

export default Component;
