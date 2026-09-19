import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpd0sxoqw.css';
import '../../css/z/z-nr2n3tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpd0sxoqw"/><path class="z-nr2n3tk"/>`,
		"fallback": "boxicons:gear-filled",
	});
}

export default Component;
