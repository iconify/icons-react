import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chq2n9bef.css';
import '../../css/x/xxrtmfzte.css';
import '../../css/v/vuc2d-btj.css';
import '../../css/h/hfjhz_52g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chq2n9bef"/><path class="xxrtmfzte"/><path class="vuc2d-btj"/><path class="hfjhz_52g"/></g>`,
		"fallback": "streamline-color:give-gift",
	});
}

export default Component;
