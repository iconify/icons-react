import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kh6ar9beh.css';
import '../../css/x/xy86oib6j.css';
import '../../css/p/pgjz8fb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kh6ar9beh"/><path class="xy86oib6j"/><path class="pgjz8fb7e"/></g>`,
		"fallback": "streamline-sharp:color-swatches",
	});
}

export default Component;
