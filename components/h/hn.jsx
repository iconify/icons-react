import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu7tm8qke.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/q/qxurtqfjt.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qu7tm8qke"/><path class="bc4gh5bbk"/><path class="qxurtqfjt"/></g>`,
		"fallback": "cif:hn",
	});
}

export default Component;
