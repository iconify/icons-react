import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfefkwblm.css';
import '../../css/s/sed_2ie9m.css';
import '../../css/v/vohjxacrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfefkwblm"/><path clip-rule="evenodd" class="sed_2ie9m"/><path class="vohjxacrj"/></g>`,
		"fallback": "streamline-plump-color:calculator-1-flat",
	});
}

export default Component;
