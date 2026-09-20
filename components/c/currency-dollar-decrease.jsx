import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gan1ri44c.css';
import '../../css/m/m3dls1bdf.css';
import '../../css/i/iorplobxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gan1ri44c"/><path class="m3dls1bdf"/><path class="iorplobxa"/></g>`,
		"fallback": "streamline-freehand:currency-dollar-decrease",
	});
}

export default Component;
