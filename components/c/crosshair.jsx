import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjsphbpy.css';
import '../../css/r/rev37acue.css';
import '../../css/y/yeraqkb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivjsphbpy wm-k"/><path class="rev37acue wm-k"/><path class="wm-a yeraqkb0d"/>`,
		"fallback": "withicons-bauhaus:crosshair",
	});
}

export default Component;
