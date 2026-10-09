import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9dgbcb3v.css';
import '../../css/i/iu22-ybad.css';
import '../../css/t/t3_xox2xc.css';
import '../../css/h/hl6352bxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9dgbcb3v"/><path class="iu22-ybad"/><path class="t3_xox2xc"/><path class="hl6352bxo"/>`,
		"fallback": "energy-icons:battery-symbol-48",
	});
}

export default Component;
