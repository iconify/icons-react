import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3-262yry.css';
import '../../css/g/gko5xubta.css';
import '../../css/z/z4aussgpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t3-262yry"/><path class="gko5xubta"/><path clip-rule="evenodd" class="z4aussgpu"/></g>`,
		"fallback": "streamline-plump-color:archive-box-flat",
	});
}

export default Component;
