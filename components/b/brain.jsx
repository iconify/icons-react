import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kikbw02ov.css';
import '../../css/w/wim9qsbky.css';
import '../../css/h/h-y9pbcfn.css';
import '../../css/f/fop9j1b1c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kikbw02ov"/><path class="wim9qsbky"/><path class="h-y9pbcfn"/><path class="fop9j1b1c"/></g>`,
		"fallback": "streamline-color:brain",
	});
}

export default Component;
