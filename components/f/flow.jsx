import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kae0pfb-s.css';
import '../../css/b/b1i331bew.css';
import '../../css/f/fwlflpbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kae0pfb-s"/><path class="b1i331bew"/><circle class="fwlflpbis"/></g>`,
		"fallback": "andrsrxn:flow",
	});
}

export default Component;
