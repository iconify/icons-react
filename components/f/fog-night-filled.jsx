import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpp5505dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpp5505dl"/>`,
		"fallback": "tdesign:fog-night-filled",
	});
}

export default Component;
