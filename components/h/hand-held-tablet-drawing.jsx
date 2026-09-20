import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uwg61jn1h.css';
import '../../css/e/eqt_3g99s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uwg61jn1h"/><path class="eqt_3g99s"/></g>`,
		"fallback": "streamline-sharp:hand-held-tablet-drawing",
	});
}

export default Component;
