import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s57ieff-v.css';
import '../../css/l/lf0d-y9oh.css';
import '../../css/x/xqdmtubva.css';
import '../../css/l/lpc58nnfg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s57ieff-v"/><path class="lf0d-y9oh"/><path class="xqdmtubva"/><path class="lpc58nnfg"/>`,
		"fallback": "energy-icons:coral-20-bold",
	});
}

export default Component;
