import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivcj8jbaz.css';
import '../../css/r/ru9og_0qt.css';
import '../../css/u/uli9wpb5n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ivcj8jbaz"/><path class="ru9og_0qt"/><path clip-rule="evenodd" class="uli9wpb5n"/></g>`,
		"fallback": "streamline-color:add-layer-2-flat",
	});
}

export default Component;
