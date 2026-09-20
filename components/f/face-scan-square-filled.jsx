import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lb7u-5bxm.css';
import '../../css/m/m-miq0b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lb7u-5bxm"/><path class="m-miq0b2g"/></g>`,
		"fallback": "reicon:face-scan-square-filled",
	});
}

export default Component;
