import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gsukswb1w.css';
import '../../css/s/sxn4tfl2r.css';
import '../../css/y/yvzccrbbf.css';
import '../../css/g/gkqxq7xik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gsukswb1w"/><path class="sxn4tfl2r"/><path class="yvzccrbbf"/><path class="gkqxq7xik"/></g>`,
		"fallback": "streamline-freehand-color:crypto-currency-bitcoin-network-globe",
	});
}

export default Component;
