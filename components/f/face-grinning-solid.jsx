import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi4wy4h2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xi4wy4h2j"/>`,
		"fallback": "nrk:face-grinning-solid",
	});
}

export default Component;
