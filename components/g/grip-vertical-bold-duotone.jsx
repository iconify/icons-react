import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1qhirzjm.css';
import '../../css/g/gxn3sqbis.css';
import '../../css/k/kvdyyd79v.css';
import '../../css/h/hv6i9sbii.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/npgeuzbag.css';
import '../../css/p/ps5kto3no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1qhirzjm"/><path class="gxn3sqbis"/><path class="kvdyyd79v"/><path class="hv6i9sbii"/><g class="xtpeb-edw"><path class="npgeuzbag"/><path class="ps5kto3no"/></g>`,
		"fallback": "solar:grip-vertical-bold-duotone",
	});
}

export default Component;
