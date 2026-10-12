import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4g_2gbsf.css';
import '../../css/v/vixdv7vsx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4g_2gbsf"/><path class="vixdv7vsx"/>`,
		"fallback": "garden:info-circle-stroke-20",
	});
}

export default Component;
