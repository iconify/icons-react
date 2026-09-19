import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdgey5bpj.css';
import '../../css/z/zxi_dh3ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdgey5bpj"/><path class="zxi_dh3ke"/>`,
		"fallback": "bx:bx-barcode",
	});
}

export default Component;
