import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcsg64zqt.css';
import '../../css/q/qv2bjpnfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fcsg64zqt"/><path class="qv2bjpnfh"/></g>`,
		"fallback": "lucide-lab:bowl-overflow",
	});
}

export default Component;
