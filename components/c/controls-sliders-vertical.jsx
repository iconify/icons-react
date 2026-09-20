import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncqboc86m.css';
import '../../css/h/h5h4-hbuj.css';
import '../../css/n/n6h8rd4gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncqboc86m"/><path class="h5h4-hbuj"/><path class="n6h8rd4gq"/></g>`,
		"fallback": "streamline-freehand-color:controls-sliders-vertical",
	});
}

export default Component;
