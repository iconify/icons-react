import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spwtggboo.css';
import '../../css/z/zap2qilim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="spwtggboo"/><path class="zap2qilim"/></g>`,
		"fallback": "thesvg-color:ark-ui",
	});
}

export default Component;
