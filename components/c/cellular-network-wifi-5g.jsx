import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h2ebchlrj.css';
import '../../css/b/bmlc_mb5j.css';
import '../../css/h/hoic_wbnl.css';
import '../../css/k/kcfesybjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h2ebchlrj"/><path class="bmlc_mb5j"/><path class="hoic_wbnl"/><path class="kcfesybjf"/></g>`,
		"fallback": "streamline-freehand-color:cellular-network-wifi-5g",
	});
}

export default Component;
