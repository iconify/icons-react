import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1buves-a.css';
import '../../css/s/srgbn5dmj.css';
import '../../css/i/iqksctbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k1buves-a"/><path class="srgbn5dmj"/><circle class="iqksctbjx"/></g>`,
		"fallback": "andrsrxn:history",
	});
}

export default Component;
