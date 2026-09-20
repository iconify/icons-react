import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcjni6bfe.css';
import '../../css/l/l1q0m9wzl.css';
import '../../css/i/if9mtwbmb.css';
import '../../css/x/xyzxunbkx.css';

const viewBox = {"width":361,"height":361};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG1t4kne3G" x1="180" x2="180" y1="358.605" y2="7.759" gradientUnits="userSpaceOnUse"><stop offset="0" class="rcjni6bfe"/><stop offset="1" class="l1q0m9wzl"/></linearGradient><path fill="url(#SVG1t4kne3G)" class="if9mtwbmb"/><path class="xyzxunbkx"/>`,
		"fallback": "thesvg-color:apple-music",
	});
}

export default Component;
