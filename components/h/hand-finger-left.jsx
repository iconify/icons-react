import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ou1egle7m.css';
import '../../css/x/xy5m85bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ou1egle7m"/><path class="xy5m85bgs"/></g>`,
		"fallback": "tabler:hand-finger-left",
	});
}

export default Component;
