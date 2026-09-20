import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/q/qv9zyob3j.css';
import '../../css/n/nol19vq4t.css';
import '../../css/g/g7a-xgufn.css';
import '../../css/h/hzapyruls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="jhxi-trnl"/><path class="qv9zyob3j"/><circle class="nol19vq4t"/><path class="g7a-xgufn"/><circle class="hzapyruls"/></g>`,
		"fallback": "lucide:circuit-board",
	});
}

export default Component;
