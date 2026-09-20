import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv6eija1r.css';
import '../../css/w/w93dlewkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pv6eija1r"/><path class="w93dlewkv"/></g>`,
		"fallback": "lucide-lab:bottle-spray",
	});
}

export default Component;
