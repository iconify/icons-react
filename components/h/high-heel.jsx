import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7k1742pa.css';
import '../../css/o/oocj7bcwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p7k1742pa"/><path class="oocj7bcwu"/></g>`,
		"fallback": "lucide-lab:high-heel",
	});
}

export default Component;
