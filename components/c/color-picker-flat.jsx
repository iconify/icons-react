import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvumqbbpt.css';
import '../../css/r/r57oj4lrq.css';
import '../../css/h/hpd8x5bdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zvumqbbpt"/><path clip-rule="evenodd" class="r57oj4lrq"/><path class="hpd8x5bdc"/></g>`,
		"fallback": "streamline-plump-color:color-picker-flat",
	});
}

export default Component;
