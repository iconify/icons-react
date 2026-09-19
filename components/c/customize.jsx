import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oobb8_b6g.css';
import '../../css/n/nqog7vbel.css';
import '../../css/x/xomb33bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oobb8_b6g"/><path class="nqog7vbel"/><path class="xomb33bku"/></g>`,
		"fallback": "hugeicons:customize",
	});
}

export default Component;
