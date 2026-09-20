import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckxyrszfo.css';
import '../../css/k/k6zgu-bti.css';
import '../../css/k/k1jhvablh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ckxyrszfo"/><path class="k6zgu-bti"/><path class="k1jhvablh"/></g>`,
		"fallback": "streamline-color:film-roll-1",
	});
}

export default Component;
