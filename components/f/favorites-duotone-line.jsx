import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mntno_erj.css';
import '../../css/d/df30_3c8i.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5XOYXbSY"><g class="ft5dv1b6b"><path class="mntno_erj"/><path class="df30_3c8i"/></g></mask></defs><path mask="url(#SVG5XOYXbSY)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:favorites-duotone-line",
	});
}

export default Component;
