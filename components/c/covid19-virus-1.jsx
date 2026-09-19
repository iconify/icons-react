import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bip1gyzkx.css';
import '../../css/l/ll5ebi28y.css';
import '../../css/z/z2g23rxag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bip1gyzkx"/><path class="ll5ebi28y"/><path class="z2g23rxag"/></g>`,
		"fallback": "covid:covid19-virus-1",
	});
}

export default Component;
