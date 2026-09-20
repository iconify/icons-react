import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bal25inyd.css';
import '../../css/p/pzhd2ofdi.css';
import '../../css/h/ht2qeubdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bal25inyd"/><path class="pzhd2ofdi"/><path class="ht2qeubdw"/></g>`,
		"fallback": "tdesign:catalog",
	});
}

export default Component;
