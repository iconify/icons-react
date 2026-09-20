import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mgj_-5kho.css';
import '../../css/t/twkjmwb_m.css';
import '../../css/o/oghttxkxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mgj_-5kho"/><path class="twkjmwb_m"/><path class="oghttxkxd"/></g>`,
		"fallback": "streamline-freehand-color:barcode-view-price",
	});
}

export default Component;
