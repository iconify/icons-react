import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpida4b8e.css';
import '../../css/f/ftko0bcdi.css';
import '../../css/k/k3s14unwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zpida4b8e"/><path class="ftko0bcdi"/><path class="k3s14unwr"/></g>`,
		"fallback": "streamline-ultimate-color:check-square",
	});
}

export default Component;
